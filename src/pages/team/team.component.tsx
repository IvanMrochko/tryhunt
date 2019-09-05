import * as React from "react";
import * as styles from "./team.scss";
import { TeamProps } from "./team.props";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TeamMember } from "src/components/teamMember";
import { text } from "@shared";
/**
 * Team component
 */
const teamList = ["John Doe", "Anja Doe", "Mike Ross", "Dan Star"];
const dataList = ["Partners", "Projects Done", "Happy Clients", "Meetings"];

const Team: React.SFC<TeamProps> = ({ id }) => {
  return (
    <section className={styles.team} id={id}>
      <div className={styles.container}>
        <h3>THE TEAM</h3>
        <p>The ones who runs this company</p>
        <div className={styles.list}>
          {teamList.map(value => (
            <TeamMember title={value} key={value}>
              {text}
            </TeamMember>
          ))}
        </div>
      </div>
      <div className={styles.addInfo}>
        {dataList.map(value => (
          <div className={styles.item} key={value}>
            <span>{Math.floor(Math.random() * 150) + 1}+</span>
            <br />
            {value}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team };
