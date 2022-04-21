
import Chart from "./Chart";
import { Progress, Image, Layout, Row, Col, Input, Button, Breadcrumb, Rate } from "antd";

import styles from "../styles/App.module.scss";


const { Header, Footer, Content } = Layout;
const { Search } = Input;

function Headera() {
    return (
        <Header
            className={styles.headerTop}>
            <div className={styles.headerSearch} style={{ display: "flex" }}>
                <Row justify="center" align="middle">
                    <Col>
                        <a href="https://en-hyouban.com/">
                            <Image src="image/Untitled.png" preview={false} />
                        </a>
                    </Col>
                    <Col>
                        <p className={styles.contentFonsize}>
                            日本最大!1,400万件の口コミ掲載
                        </p>
                        <p className={styles.contentFonsize}>
                            エン・ジャパンの企業口コミサービス
                        </p>
                    </Col>
                </Row>
                <Row justify="center" align="middle">
                    <Col>
                        <Search placeholder="社名で検索" style={{ width: 285 }} />
                    </Col>
                    <Col>
                        <Button className={styles.headerSignup}>ログイン</Button>
                        <Button className={styles.headerLogin}>会員登録</Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.headerMiddle}>
                <div className={styles.headerChart}>
                    <Breadcrumb
                        separator={
                            <span style={{ color: "#fff", opacity: "0.5" }}>{">"}</span>
                        }
                    >
                        <Breadcrumb.Item
                            className={styles.headerText}
                            href="https://en-hyouban.com"
                        >
                            会社の評判・口コミ ライトハウス
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            className={styles.headerText}
                            href="https://en-hyouban.com/search/industry/sonohokanosabisugyo/shokugyoshokai-rodoshahaken/shokugyoshokai/"
                        >
                            その他のサービス業・職業紹介・労働者派遣・職業紹介
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className={styles.headerText1}>
                            エン・ジャパン株式会社の評判・口コミ
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.titleChart}>
                    <h1 >エン・ジャパン株式会社</h1>
                    <p>の評判・口コミ</p>
                </div>
                <div className={styles.scoreBlock}>
                    <Rate disabled defaultValue={4} className={styles.rateScore} />
                    <p className={styles.tagP}>3.8</p>
                    <Row>

                        <Col className={`${styles.titleLabel} pl-4 pt-1`} >口コミ
                            <span className={`${styles.titleBoder} `}>4939  件</ span>
                        </Col>

                        <Col className={`${styles.titleLabel} pl-4 pt-1`} >口コミ
                            <span className={`${styles.titleBoder}`}>4939 件</span>
                        </Col>

                        <Col className={`${styles.titleLabel} pl-4 pt-1 pd-2`} >口コミ
                            <span className={`${styles.titleBoder}`}>4939 件</span>
                        </Col>

                        <Col className={`${styles.titleLabel} pl-4 pt-1`} >口コミ
                            <span className={`${styles.titleBoder1}`}>4939 件</span>
                        </Col>
                    </Row>
                </div>
                <Row className={styles.chartRow}>
                    <Row className={styles.chartMini}>
                        <h2 className={styles.chartH2}>エン・ジャパン株式会社の正社員（2100名）による会社評価</h2>
                        <Chart align='middle' />
                    </Row>
                    <Row className={styles.sideBtn}>
                        <div className={styles.sideBtnInfo}>
                            <div className={styles.sideBtnMini}>
                                <span className={styles.textP}>平均年収（正社員)</span>
                                <div className={styles.divCha}>
                                    <a href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn} src="image/button_register.png" preview={false} />
                                    </a>
                                    <span className={`${styles.textP1}`}>万円</span>
                                </div>
                                <div className="pt-1">
                                    <span className={styles.textP}>（平均年齢 30 歳）</span>
                                </div>
                            </div>
                            <div className={styles.sideBtnMini}>
                                <span className={styles.textP}>平均年収（正社員)</span>
                                <div className={styles.divCha}>
                                    <a href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn} src="image/button_register.png" preview={false} />
                                    </a>
                                    <span className={`${styles.textP1}`}>万円</span>
                                </div>
                                <div className="pt-1">
                                    <span className={styles.textP}>（平均年齢 30 歳）</span>
                                </div>
                            </div>
                        </div>
                        <Row className={styles.sideProgress}>
                            <>
                                <div className={styles.space1}><span className={styles.textPa1}>年収・給与の納得度</span>
                                    <a className={styles.buttonspace} href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn1} src="image/button_register.png" preview={false} /></a>
                                </div>
                                <Progress percent={30} />
                                <div className={styles.space1}><span className={styles.textPa1}>年収・給与の納得度</span>
                                    <a className={styles.buttonspace} href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn1} src="image/button_register.png" preview={false} /></a>
                                </div>
                                <Progress percent={50} />
                                <div className={styles.space1}><span className={styles.textPa1}>年収・給与の納得度</span>
                                    <a className={styles.buttonspace} href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn1} src="image/button_register.png" preview={false} /></a>
                                </div>
                                <Progress percent={70} />
                                <div className={styles.space1}><span className={styles.textPa1}>年収・給与の納得度</span>
                                    <a className={styles.buttonspace} href="https://en-hyouban.com/user/register/?companytop_top_salary">
                                        <Image className={styles.imageBtn1} src="image/button_register.png" preview={false} /></a>
                                </div>
                                <Progress percent={90} />
                            </>
                        </Row>

                        <Row className={styles.btnLast}>
                            <Col className="pr-4">
                                <Button className={styles.btnShow} type="text">
                                    <span className={styles.textP}>
                                        職種などで絞り込む
                                    </span> </Button>
                            </Col>
                            <Col>
                                <Button className={`${styles.btnShow1} pl-4`} type="text">
                                    <span className={styles.textP}>
                                        職種などで絞り込む
                                    </span> </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={styles.lastBtn}>
                                <Button className={`${styles.btnShow1} pl-4`} type="text">
                                    <span className={styles.textP}>
                                        職種などで絞り込む </span> </Button>
                            </Col>
                        </Row>
                    </Row>
                </Row>
                <div className={styles.textP}>
                    <p className="pt-16">エン・ジャパン株式会社の評判・口コミページです。エン・ジャパン株式会社で働く社員や元社員が投稿した、給与・年収、勤務時間、休日・休暇、面接などの評判・口コミを4955件掲載中。ライトハウスは、エン・ジャパン株式会社への転職・就職活動をサポートします！</p>
                </div>
                <div className={styles.banner}>
                    <a href="https://en-hyouban.com/user/register/?companytop_banner">
                        <Image src="image/company-top-banner-2-pc.png" preview={false} />
                    </a>
                </div>
            </div>
            <Row className={styles.bottomHeader}>
                <Row className={styles.bottomSize}>
                    <Col className={styles.colLast}>
                        <div>
                            <a href="https://en-hyouban.com/company/10007309197/">
                                <span className={styles.textLast}>TOP</span>
                            </a>
                        </div>
                    </Col>

                    <Col className={styles.colLast}>
                        <div >
                            <a href="https://en-hyouban.com/company/10007309197/">
                                <span className={styles.textLast}>口コミ(4955 件)</span>

                            </a>
                        </div>
                    </Col>

                    <Col className={styles.colLast}>
                        <div >
                            <a href="https://en-hyouban.com/company/10007309197/">
                                <span className={styles.textLast}>年収・給与(757 件)</span>
                            </a>
                        </div>
                    </Col>

                    <Col className={styles.colLast1}>
                        <div >
                            <a href="https://en-hyouban.com/company/10007309197/">
                                <span className={styles.textLast}>女性(1714 件)</span>
                            </a>
                        </div>
                    </Col>

                    <Col className={styles.colLast1}>
                        <div >
                            <a href="https://en-hyouban.com/company/10007309197/">
                                <span className={styles.textLast}>女性(1714 件)</span>
                            </a>
                        </div>
                    </Col>
                </Row>

            </Row>

        </Header>
    )
}

export default Headera