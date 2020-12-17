
class CategoryService {
    getCategoryList(){
        const list = {
            "0":"survey",
            "1":"goal",
            "2":"birthday",
            "3":"release",
            "4":"lifeEvent",
            "5":"recognition",
            "6":"celebration"
        }
        return list;
    }
}

export default new CategoryService;