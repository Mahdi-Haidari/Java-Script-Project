fetch("data.json")
  .then((e) => e.json())
  .then((data) => {
    console.log(data);
  });
