import { useContext } from "react";
import garra from "../../img/garra.png";
import { UserContex } from "../../UserContexte";
import { Container } from "./style";

const SidBar = () => {
  const { equipmentData, equipmentDataModal } = useContext(UserContex);
  let ultimo = equipmentData[equipmentData.length - 1];
  console.log("ultimo", ultimo);
  return (
    <Container>
      <h4>Lista de veículos</h4>
      <ul>
        {equipmentData.map((equip) => {
          return (
            <li key={equip.id}>
              <img src={garra} alt="" />
              <div>
                {equipmentDataModal.map((modal) => {
                  if (modal.id === equip.equipmentModelId) {
                    return <span key={modal.id}>{modal.name}</span>;
                  }
                })}
                <p>{equip.name}</p>
              </div>
              <span className="status"></span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default SidBar;
