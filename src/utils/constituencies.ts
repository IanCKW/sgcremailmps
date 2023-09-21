import jsonData from '../assets/data/constituencies.json';

type ConstituencyMember = {
    name: string;
    email: string;
};

type Constituencies = {
    [constituency: string]: ConstituencyMember[];
};

type Data = {
    grcs: Constituencies;
    smcs: Constituencies;
};

const data: Data = jsonData;    

function getEmails(constituency: string): string[] {
    if (constituency in data.smcs) {
        return data.smcs[constituency].map(member => member.email);
    }
    else if (constituency in data.grcs){
        return data.grcs[constituency].map(member => member.email);
    }
    else {
        return [];
    }
}

const getSMCs = (): string[] => {
    return Object.keys(data.smcs).map(smc => `${smc}`);
};

const getGRCs = (): string[] => {
    return Object.keys(data.grcs).map(grc => `${grc}`);
};


export { getSMCs, getGRCs, getEmails };