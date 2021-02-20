/* 
  Function to get child property by an object, following a path.
  @params path data.user.profile.name with this path we get "Jhony" the name value.
  @params obj:
  data: {
    messages: ["string"],
    user: {
      profile: {
        _id: "string",
        name: "Jhony",
        surname: "string"
      }
    }
  }
  @return The value of the last property specified in the path. In this case "name"
*/
const getDepthData = (path, obj) => {
    const [firstKey, ...keyList] = path.split('.');
    let { [firstKey]: objData } = obj;
    for (let key of keyList) {
        if (objData[key] !== undefined) {
            objData = objData[key];
        }
    }
    return objData;
}
