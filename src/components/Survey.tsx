// Survey.tsx
import React, { useState } from "react";
import rawData from "../assets/data/policyChanges.json";
import PolicyGroup from "../components/PolicyGroup";
import { SurveyData } from "../types/types";
import Collapsible from "react-collapsible";

interface SurveyProps {
  onSubmit: (data: SurveyData) => void;
  onBack: () => void;
}

interface PolicyData {
  [key: string]: string[];
}

const policyData: PolicyData = rawData;

const Survey: React.FC<SurveyProps> = ({ onSubmit, onBack }) => {
  const renderCheckboxes = () => {
    const policyGroups = [];
    for (const header in policyData) {
      policyGroups.push(
        <PolicyGroup
          onCheckboxChange={handleCheckboxChange}
          key={header}
          groupName={header}
          policyList={policyData[header]}
        />
      );
    }
    return policyGroups;
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked && surveyData.policyChanges.length >= 3) {
      alert("You have chosen more than 3 options");
      e.target.checked = false; // Uncheck the checkbox
      return;
    }
    setSurveyData((prevData) => {
      const chosenPolicies = checked
        ? [...prevData.policyChanges, value]
        : prevData.policyChanges.filter((policy) => policy !== value);
      return { ...prevData, policyChanges: chosenPolicies };
    });
  };

  const [surveyData, setSurveyData] = useState<SurveyData>({
    introText: "",
    policyChanges: [],
    reason: "",
    name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(surveyData);
  };

  const numPolicies: number = Object.values(policyData).reduce(
    (sum: number, curr: string[]) => sum + curr.length,
    0
  );
  return (
    <div id="survey">
      <div id="button_list">
        <button onClick={onBack}>↻ Back</button>{" "}
      </div>
      <p className="privacy-statement">
        Privacy statement: SG Climate Rally does not store any of your private
        data, nor the contents of your email.
      </p>
      <h2>Name you'd like to sign off with:</h2>
      <textarea
        name="name"
        id="name_textarea"
        placeholder="Name"
        onChange={handleInputChange}
        autoComplete="[YOUR NAME]"
      ></textarea>
      <h2>
        Share with your MP who you are, and why you care about the climate
        crisis!
      </h2>
      <Collapsible triggerWhenOpen={"▼ Examples"} trigger={"► Examples"}>
        <>
          <ul></ul>
          <li className="example_li">
            As a mother of two, I want my children to have secure access to food
            and water and good jobs in the future.
          </li>
          <li className="example_li">
            As someone who enjoys Singapore’s biodiversity, I believe that
            Singapore can better protect our secondary forests.{" "}
          </li>
          <li className="example_li">
            As a Singaporean who is struggling with the heat, I worry for the
            elderly and outdoor workers without aircon who are even more
            vulnerable to the heat.
          </li>
        </>
      </Collapsible>
      <textarea
        name="introText"
        placeholder="As a ___, I ___ ..."
        onChange={handleInputChange}
      ></textarea>

      <h2>What policy changes are you advocating for?</h2>
      <span>Please only pick up to 3 from the {numPolicies} options </span>
      <p>
        Visit this{" "}
        <a
          href="https://tinyurl.com/sgcr-policy23"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>{" "}
        for the full policy paper
      </p>

      {renderCheckboxes()}
      <h2> Why are you advocating for this particular change?</h2>
      <Collapsible triggerWhenOpen={"▼ Examples"} trigger={"► Examples"}>
        <ul>
          <li className="example_li">
            This is important to me because bike- and pedestrian-friendly roads
            would benefit everyone!
          </li>
          <li className="example_li">
            This is important to me because I believe corporations must be held
            to higher standards in preventing environmental harms.
          </li>
          <li className="example_li">
            This is important to me because the Singapore I love is one that
            cares about all citizens and ensures that they are able to maintain
            a reasonable standard of living amidst the threat to the economy
            that the climate crisis might bring.
          </li>
        </ul>
      </Collapsible>

      <textarea
        name="reason"
        placeholder="This is important to me because..."
        onChange={handleInputChange}
      ></textarea>

      <div id="bottom_buttons">
        <button onClick={onBack}>↻ Back</button>
        <button onClick={handleSubmit}>Draft Email</button>
      </div>
    </div>
  );
};

export default Survey;
