import React from "react";

interface PolicyGroupProps {
  groupName: string;
  policyList: string[];
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PolicyGroup: React.FC<PolicyGroupProps> = ({
  groupName,
  policyList,
  onCheckboxChange,
}) => {
  return (
    <>
      <h3 className="group-name">{groupName}</h3>
      <ul>
        {policyList.map((text, index) => (
          <li key={groupName + index.toString()}>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id={groupName + index.toString()}
                value={text}
                onChange={onCheckboxChange}
                defaultChecked={false}
              />
              <label htmlFor={groupName + index.toString()}>{text}</label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PolicyGroup;
