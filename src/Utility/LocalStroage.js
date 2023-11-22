const getStoredApplication =() =>{
    const storedjobApplication =localStorage.getItem('job-Application');
    if(storedjobApplication){
        return JSON.parse(storedjobApplication);
    }
    return [];
}
const savedApplication = id =>{
    const storeApplications   = getStoredApplication();
    const exists = storeApplications.find(jobId=> jobId ===id);
    if(!exists){
        storeApplications.push(id);
        localStorage.setItem('job-Application', JSON.stringify(storeApplications))
    }
}
export {getStoredApplication,savedApplication}