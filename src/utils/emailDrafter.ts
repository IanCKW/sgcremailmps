import { SurveyData } from "../types/types";

export const draftSubject = (() => "Please help combat the climate crisis \n")

export const draftEmail = ((constituency:String, surveyData:SurveyData) => {
const { introText, policyChanges, elaboration, reason, name } = surveyData;
    const policyChangesList = policyChanges
    .map((policy, index) => `${index + 1}. ${policy}`)
    .join("\n");

    let message = `Dear Member of Parliament,

I am a resident of ${constituency}. 
    `;

    if (introText) {
    message += `
${introText}.
    `;
    }

    message += `
I echo SG Climate Rally’s call for ambitious, inclusive, fair climate policies. I am heartened by the actions that the government has taken thus far in climate action, and would like to express my support for even bolder action!
    `;

    if (policyChanges.length > 0) {
    message += `
The policy changes I would like to see are as follows:

${policyChangesList}
    `;
    }

    if (elaboration) {
    message += `
${elaboration}
    `;
    }

    if (reason) {
    message += `
${reason}
    `;
    }

    message += `
Climate change is a threat to the livelihoods, health, safety, and future for all Singaporeans. I hope to see more climate discussions in parliament and a push for greater climate action. 
SG Climate Rally’s full policy recommendations can be viewed here: https://tinyurl.com/sgcr-policy23

Thank you.

Sincerely,
${name}
Resident of ${constituency}`;
    return message
    }
)