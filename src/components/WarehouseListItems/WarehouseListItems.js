const WarehouseListItems = () => {
  const list = [
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
    {
      warehouse: "Manhattan",
      address: "503 Broadway, New York, USA",
      name: "Parmin Aujla",
      phone_number: "+1 (629) 555-0129",
      email: "paujla@instock.com",
    },
  ];

  const mappedList = list.map((element) => {
    return (
      <div>
        <div>
          <h4>WAREHOUSE</h4>
          <p>{element.warehouse}</p>
        </div>
        <div>
          <h4>ADDRESS</h4>
          <p>{element.address}</p>
        </div>
        <div>
          <h4>CONTACT NAME</h4>
          <p> {element.name}</p>
        </div>
        <div>
          <h4>CONTACT INFORMATION</h4>
          <p>{element.phone_number}</p>
          <p>{element.email}</p>
        </div>
      </div>
    );
  });

  return <div>{mappedList}</div>;
};
export default WarehouseListItems;
