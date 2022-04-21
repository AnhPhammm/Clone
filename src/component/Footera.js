import { Progress, Image, Layout, Row, Col, Input, Button, Breadcrumb, Rate } from "antd";
import styles from "../styles/App.module.scss";
import { DownOutlined } from "@ant-design/icons";
const { Header, Footer, Content } = Layout;

function Footera () {
    return (
        <Footer className= {styles.containerFooter}>

          <div className= {styles.containerBody}>
            <div className= {styles.containerSmall}> 
            <div className= {styles.container1}>
              <div className= {styles.containerTitle}>
              <span className={styles.titleFooter}> 業種から口コミ・評判をさがす</span>
              </div>
            </div>
            <Row className={styles.titleInfo}>
            
              <Col className={styles.Col1}>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/">製造業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/">宿泊、飲食サービス</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 卸売、小売</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 複合サービス事業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
              </Col>
              <Col className={styles.Col1}>
              <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
              </Col>
              <Col className={styles.Col1}>
              <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
              </Col>
              <Col className={styles.Col1}>
              <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
                <div className={styles.titleInfo1}>
                  <a href="https://en-hyouban.com/search/industry/nogyo-ringyo/"> 農業、林業</a>
                  <DownOutlined className={styles.iconTitle}/>
                </div>
              </Col>

            </Row>
            <div className= {styles.container1}>
              <div className= {styles.containerTitle}>
              <span className={styles.titleFooter}> 業種から口コミ・評判をさがす</span>
              </div>
            </div>

            <Row className={`${styles.TitleRow} pl-4 pt-4`}>
              <span>北海道</span>
              <div className="pl-16"><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                </a>
                <DownOutlined className={styles.paddingLeft}/>
                
                </div>
            </Row>
            
              <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                 
              </Row>
                </div>
                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                 
              </Row>
                </div>

                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  
              </Row>
                </div>

                <div className={`${styles.leftCol}`}
            
              ><span>東北</span></div>
              
              <div className={`abcd`}>
              <Row>
                <div className={`${styles.canChinh} mb-4`}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
                  <div className={styles.canChinh}><a href="https://en-hyouban.com/search/area/hokkaido/">北海道
                  </a>
                  <DownOutlined className={styles.paddingLeft}/>
                  
                  </div>
              </Row>
                </div>

                
            </div>
          </div>
          <div className={styles.lastFooter}>  
          <div className={styles.lastTitle}>
            <span className={`${styles.spaner}`}>【ライトハウス】は、就職・転職を希望するすべてのみなさまにご活用いただける、日本最大級の口コミ・評判プラットフォーム。毎日更新。エン独自サーベイによる企業研究や<br/></span>
            <span  className={`${styles.spaner}`}>会社に関する正確かつ質の高い情報を収集し、企業データの比較、女性評価の可視化など、企業をあらゆる角度から知ることが出来ます。</span>
          </div>
          </div>

          <div className={styles.lastRow}>
            <div className={styles.lastRoww}>
              <div>
                <a className={styles.titlett}  href="#">個人情報の取り扱いについて</a>
                <a className={styles.titlett}  href="#">個人情報の取り扱いについて</a>
                <a className={styles.titlett}  href="#">個人情報の取り扱いについて</a>
                <a className={styles.titlett}  href="#">個人情報の取り扱いについて</a>
                <a  className={styles.titleted} href="#">個人情報の取り扱いについて</a>
              </div>
              <div className={styles.infoTable}>
                  <span className={styles.infoLast}> 【エン・ジャパングループ】サービス一覧</span>
              </div>
              <div className="pt-8">

              </div>
              <div className={styles.infoTable}>
                      < a className={styles.infoYT} href="#">企業様向けサービス →</a>
              </div>
            </div>
          </div>
        </Footer>
    )
}

export default Footera