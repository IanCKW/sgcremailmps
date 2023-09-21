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
    setSurveyData((prevData) => {
      const chosenPolicies = checked
        ? [...prevData.policyChanges, value]
        : prevData.policyChanges.filter((policy) => policy != value);
      return { ...prevData, policyChanges: chosenPolicies };
    });
  };

  const [surveyData, setSurveyData] = useState<SurveyData>({
    introText: "",
    policyChanges: [],
    elaboration: "",
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

  return (
    <div id="survey">
      <button onClick={onBack}>⬅ Back</button>
      <h2>
        Share with your MP who you are, and why you care about the climate
        crisis!
      </h2>
      <Collapsible triggerWhenOpen={"▼ Examples"} trigger={"► Examples"}>
        <>
          <ul></ul>
          <li className="example_li">
            I am a mother of two and I want my children to have secure access to
            food and water and good jobs in the future.
          </li>
          <li className="example_li">
            I am someone who enjoys Singapore’s biodiversity and believe that
            Singapore can better protect our secondary forests.{" "}
          </li>
          <li className="example_li">
            I am a Singaporean who is struggling with the heat, and worry for
            the elderly and outdoor workers without aircon who are even more
            vulnerable to the heat.
          </li>
        </>
      </Collapsible>
      <textarea
        name="introText"
        placeholder="I am..."
        onChange={handleInputChange}
      ></textarea>

      <h2>What policy changes are you advocating for?</h2>
      <span>Pick 1 to 3 options</span>
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
      <h2 className="top-margin-25px">
        Elaborate on what specific changes you would like to see!
      </h2>
      <textarea
        name="elaboration"
        placeholder="Specific changes I'd like to see include..."
        onChange={handleInputChange}
      ></textarea>

      <h2> Why are you advocating for this particular change?</h2>
      <Collapsible triggerWhenOpen={"▼ Examples"} trigger={"► Examples"}>
        <ul>
          <li className="example_li">
            This is important to me because I love cycling to work and I would
            love to have more bike friendly roads!
          </li>
          <li className="example_li">
            This is important to me because the Singapore I love is one that
            cares about all citizens and ensures that they are able to maintain
            a reasonable standard of living amidst the threat to the economy
            that the climate crisis might bring.
          </li>
          <li className="example_li">
            This is important to me because I believe the current carbon tax is
            insufficient to combat the climate crisis.
          </li>
        </ul>
      </Collapsible>

      <textarea
        name="reason"
        placeholder="This is important to me because"
        onChange={handleInputChange}
      ></textarea>

      <h2>Name you'd like to sign off with</h2>
      <p>
        Climate rally does not store any private data, but if you're
        uncomfortable putting your name here, you may manually insert your name
        into the drafted email
      </p>
      <textarea
        name="name"
        id="name_textarea"
        placeholder="Name"
        onChange={handleInputChange}
        autoComplete="[YOUR NAME]"
      ></textarea>

      <div id="bottom_buttons">
        <button onClick={onBack}>⬅ Back</button>
        <button onClick={handleSubmit}>Draft Email</button>
      </div>
    </div>
  );
};

export default Survey;
