import axios from "axios";

const ENTERPRISE_API_URL =  "https://emvkgnm1h8.execute-api.us-east-1.amazonaws.com/prod/";

class Services {
    //Employe
    getEmployee(id) {
        return axios.get(ENTERPRISE_API_URL+"employeeFunction?empId="+id);
    }
    postEmployee() {
        return axios.post(ENTERPRISE_API_URL+"employeeFunction");
    }
    putEmployee() {
        return axios.put(ENTERPRISE_API_URL+"employeeFunction");
    }
    deleteEmployee() {
        return axios.delete(ENTERPRISE_API_URL+"employeeFunction");
    }

    //Chat
    getChat() {
        return axios.get(ENTERPRISE_API_URL+"chatFunction");
    }
    postChat() {
        return axios.post(ENTERPRISE_API_URL+"chatFunction");
    }
    putChat() {
        return axios.put(ENTERPRISE_API_URL+"chatFunction");
    }
    deleteChat() {
        return axios.delete(ENTERPRISE_API_URL+"chatFunction");
    }

    //Newsfeed
    getNewsfeed() {
        return axios.get(ENTERPRISE_API_URL+"newsFeedFunction");
    }
    postNewsfeed(feedContent) {
        return axios.post(ENTERPRISE_API_URL+"newsFeedFunction", feedContent);
    }
    putNewsfeed() {
        return axios.put(ENTERPRISE_API_URL+"newsFeedFunction");
    }
    deleteNewsfeed() {
        return axios.delete(ENTERPRISE_API_URL+"newsFeedFunction");
    }

    //Notification
    getNotification(notificationId) {
        return axios.get(ENTERPRISE_API_URL+"notificationFunction?notificationId="+notificationId);
    }
    postNotification() {
        return axios.post(ENTERPRISE_API_URL+"notificationFunction");
    }
    putNotification() {
        return axios.put(ENTERPRISE_API_URL+"notificationFunction");
    }
    deleteNotification() {
        return axios.delete(ENTERPRISE_API_URL+"notificationFunction");
    }

    //Feedback
    getFeedback(id) {
        return axios.get(ENTERPRISE_API_URL+"feedbackFunction?id="+id);
    }
    postFeedback() {
        return axios.post(ENTERPRISE_API_URL+"feedbackFunction");
    }
    putFeedback() {
        return axios.put(ENTERPRISE_API_URL+"feedbackFunction");
    }
    deleteFeedback() {
        return axios.delete(ENTERPRISE_API_URL+"feedbackFunction");
    }

    //Achievement
    getAchievement(id) {
        return axios.get(ENTERPRISE_API_URL+"achievementFunction?id="+id);
    }
    postAchievement() {
        return axios.post(ENTERPRISE_API_URL+"achievementFunction");
    }
    putAchievement() {
        return axios.put(ENTERPRISE_API_URL+"achievementFunction");
    }
    deleteAchievement() {
        return axios.delete(ENTERPRISE_API_URL+"achievementFunction");
    }
}

export default new Services;