import rawData from '../assets/data/policyChanges.json';

interface PolicyData {
    [key: string]: string[];
}
const data: PolicyData = rawData;

for (const header in data) {
        console.log(header);  
        for (const item of data[header]) {
            console.log(item); 
        }
}
