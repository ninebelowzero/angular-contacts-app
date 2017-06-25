export default ($http) => {
  return {
    create: (model) => {
      return $http.post('/api/contacts', model);
    },
    retrieve: () => {
      return $http.get('/api/contacts');
    },
    update: (model) => {
      return $http.put(`/api/contacts/${model._id}`, model);
    },
    delete: (model) => {
      return $http.delete(`/api/contacts/${model._id}`);
    },
    uploadCsvData: (data) => {

      data = data.map((row) => {
        return row['0'].split(',');
      });

      // Last row is always blank for some reason
      data.pop();
      const fields = data.shift();

      data = data.map((row) => {
        const obj = {};
        fields.forEach((field) => {
          obj[field] = row.shift();
        });
        return obj;
      });

      console.log("Processed data:", data);

      let promises = data.map((model) => {
        return $http.post('/api/contacts', model);
      });

      return Promise.all(promises);

    }
  };
};
