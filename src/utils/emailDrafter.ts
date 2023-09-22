import { SurveyData } from "../types/types";

export const draftSubject = (() => "Please help combat the climate crisis \n")

export const draftEmail = ((constituency:String, surveyData:SurveyData) => {
const { introText, policyChanges, reason, name } = surveyData;
    const policyChangesList = policyChanges
    .map((policy, index) => `${index + 1}. ${policy}`)
    .join("\n");

    let message = `Dear Member of Parliament,
`;
if (name) {
    message +=`
I am ${name}, a resident of ${constituency}, and I write as part of SG Climate Rally 2023 (sgclimaterally.com), a ground-up movement advocating for a climate-just Singapore.
    `;
}
else {
    message +=`
I am [NAME], a resident of ${constituency}, and I write as part of SG Climate Rally 2023 (sgclimaterally.com), a ground-up movement advocating for a climate-just Singapore.
    `;
}

    if (introText) {
    message += `
${introText}
`;
    }

    message += `
I am heartened that the government has recognised the climate crisis as an issue of paramount importance. However, I recognise that much more needs to be done. I echo SG Climate Rally’s call on the government to accelerate the transition towards a net-zero Singapore, protect our precious ecosystems, and empower the people!    
`;

    if (policyChanges.length > 0) {
    message += `
In particular, I would like to highlight the following policy recommendations: 

${policyChangesList}
`;
    }

    if (reason) {
    message += `
${reason}
`;
    }

    message += `
I look forward to seeing a greater push for bold and inclusive climate policies in Parliament.

SG Climate Rally’s full policy recommendations can be viewed here: https://tinyurl.com/sgcr-policy23

Thank you for your time.
    
Sincerely,`;
if (name) {
    message +=`
${name}`;
}
else {
    message+=`
[NAME]`;
}
    return message
    }
)