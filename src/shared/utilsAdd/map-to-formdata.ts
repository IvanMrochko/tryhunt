const mapToFormData = (data: Object) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {

    if (Array.isArray(data[key])) {
      data[key].forEach(item => formData.append(key, item));
      // formData.set(key, data[key].join(','))
      // formData.set(key, "")
    } else {
      formData.set(key, data[key]);
    }
  });
  return formData;
};

export { mapToFormData };
