import React, { useState } from "react";
import Header from "../components/Header";
import ButtonList from "../components/ButtonList";
import Survey from "../components/Survey";
import EmailDraft from "../components/EmailDraft";
import { getSMCs, getGRCs, getEmails } from "../utils/constituencies";
import { SurveyData } from "../types/types";
import { draftEmail, draftSubject } from "../utils/emailDrafter";
import Footer from "../components/Footer";
import useSmoothScrollIntoView from "../hooks/useSmoothScrollIntoView";

export enum Phases {
  SMCGRC,
  SMC,
  GRC,
  SURVEY,
}

const smcs = getSMCs();
const grcs = getGRCs();

const LandingPage: React.FC = () => {
  const [phase, setHasClicked] = useState(Phases.SMCGRC);
  const [constituency, setConstituency] = useState("");
  const [recipients, setRecipients] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const surveyRef = useSmoothScrollIntoView(phase === Phases.SURVEY);
  const handleSurveySubmit = (surveyData: SurveyData) => {
    const emailDraft = draftEmail(constituency, surveyData);
    const addresses = getEmails(constituency);
    addresses.map((address) => console.log(address));
    setGeneratedMessage(emailDraft);
    setRecipients(addresses.join(","));
    const mailtoLink = `mailto:${addresses.join(",")}; 
      ?subject=${encodeURIComponent(draftSubject())}
      &body=${encodeURIComponent(emailDraft)}`;
    window.location.href = mailtoLink;
  };

  const renderButtonList = () => {
    switch (phase) {
      case Phases.SMCGRC: {
        return (
          <ButtonList
            externalLink={
              "https://www.parliament.gov.sg/mps/find-mps-in-my-constituency"
            }
            buttonNames={["I'm in an SMC", "I'm in a GRC"]}
            buttonFuncs={[
              () => setHasClicked(Phases.SMC),
              () => setHasClicked(Phases.GRC),
            ]}
            buttonHeader="Choose your SMC / GRC"
          />
        );
      }
      case Phases.SMC: {
        return (
          <ButtonList
            buttonNames={[...smcs, "↻ Back"]}
            buttonFuncs={[
              ...smcs.map((smc) => () => {
                setHasClicked(Phases.SURVEY);
                setConstituency(smc);
              }),
              () => setHasClicked(Phases.SMCGRC),
            ]}
            buttonHeader={"Choose your SMC"}
          />
        );
      }
      case Phases.GRC: {
        return (
          <ButtonList
            buttonNames={[...grcs, "↻ Back"]}
            buttonFuncs={[
              ...grcs.map((grc) => () => {
                setHasClicked(Phases.SURVEY);
                setConstituency(grc);
              }),
              () => setHasClicked(Phases.SMCGRC),
            ]}
            buttonHeader={"Choose your GRC"}
          />
        );
      }
      case Phases.SURVEY: {
        return (
          <>
            <ButtonList
              buttonNames={[]}
              buttonFuncs={[() => setHasClicked(Phases.SURVEY)]}
            />
            <div ref={surveyRef}>
              <Survey
                onSubmit={handleSurveySubmit}
                onBack={() => {
                  setHasClicked(Phases.SMCGRC);
                  setConstituency("");
                  setGeneratedMessage(null);
                }}
              />
              {generatedMessage && (
                <EmailDraft
                  message={generatedMessage}
                  recipients={recipients}
                  onMessageChange={setGeneratedMessage}
                  subject={draftSubject()}
                />
              )}
            </div>
          </>
        );
      }
      default: {
        console.log("Unexpected phase encountered");
      }
    }
  };

  return (
    <div id="page-container">
      <Header />
      <div id="content">
        <div id="img-container">
          <img id="mail_img" src="/PTMPmail.svg" alt="Logo" />
        </div>
        <h3>MAKE YOUR VOICE HEARD</h3>
        <p>
          As part of the SG Climate Rally 2023, we invite you to write to your
          MP to show your support for policy changes that steer our planet
          towards a healthier, more resilient, and just future.
        </p>
        <div className="callout">
          “MPs act as a bridge between the community and the Government by
          ensuring that the concerns of their constituents are heard in
          Parliament.”
          <span>- parliament.gov.sg</span>
        </div>

        {renderButtonList()}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
