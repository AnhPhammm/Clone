
import { Progress, Image, Layout, Row, Col, Input, Button, Breadcrumb, Rate } from "antd";
import styles from "./styles/App.module.scss";
import Headera from "./component/Headera";
import Contenta from "./component/Contenta";
import Footera from "./component/Footera"
import { DownOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;



function App() {
  return (
    <div className={styles.containerHeader}>
      <Layout>
        <Headera />
        <Contenta />
        <Footera />
        <div className={styles.modal}>
        <Button className={styles.btnModal}>
          <span className={styles.modalTitle}>
        「会員限定」情報を見るなら、今すぐ会員登録(無料)
          </span>
        </Button>
        </div>
      </Layout>
    </div>
  );
}

export default App;
