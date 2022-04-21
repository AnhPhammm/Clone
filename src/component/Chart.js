import styles from "../styles/App.module.scss";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";
const data = [
    {
        subject: "会社の成長性や将来性",
        A: 6,
        fullMark: 5,
    },
    {
        subject: "事業の優位性や独自性",
        A: 4.1,
        fullMark: 5
    },
    {
        subject: "実力主義",
        A: 5.2,
        fullMark: 5
    },
    {
        subject: "活気のある風土",
        A: 3.7,

        fullMark: 5
    },
    {
        subject: "20代成長環境",
        A: 4.8,

        fullMark: 5
    },
    {
        subject: "仕事を通じた社会貢献",
        A: 3.5,
        fullMark: 5
    },
    {
        subject: "イノベーシへの挑戦",
        A: 3.7,
        fullMark: 5
    },
    {
        subject: "経営陣の手腕",
        A: 3.8,
        fullMark: 5
    }
];

function Chart() {
    return (
        <div className={styles.radChart}>
            <div>
                <span className={styles.radSpan1}>6.1  </span>
            </div>
            <div>

                <span className={styles.radSpan2}>4.1    </span>
            </div>
            <div>
                <span className={styles.radSpan3}>5.2    </span>

            </div>
            <div>
                <span className={styles.radSpan4}>3.7   </span>
            </div>
            <div>
                <span className={styles.radSpan5}>4.8   </span>
            </div>
            <div>
                <span className={styles.radSpan6}>3.5   </span>
            </div>
            <div>
                <span className={styles.radSpan7}>3.7   </span>
            </div>
            <div>
                <span className={styles.radSpan8}>3.8   </span>
            </div>

            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey={"subject"} />
                <PolarRadiusAxis dataKey={"A"} />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#ff9900"
                    fill="#ff9900"
                    fillOpacity={0.8}
                />


            </RadarChart >
        </div>
    );

}

export default Chart

