import { createContext } from "react";
import Equipment from "./data/equipment.json";
import EquipmentModel from "./data/equipmentModel.json";
export const UserContex = createContext();

export const UserStorage = ({ children }) => {
  const equipmentData = Equipment;
  const equipmentDataModal = EquipmentModel;
  return (
    <UserContex.Provider value={{ equipmentData, equipmentDataModal }}>
      {children}
    </UserContex.Provider>
  );
};
