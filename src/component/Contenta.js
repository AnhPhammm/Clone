
import { Progress, Image, Layout, Row, Col, Input, Button, Breadcrumb, Rate } from "antd";
import { ArrowRightOutlined, FacebookOutlined, LikeOutlined, LinkOutlined, TwitterOutlined } from "@ant-design/icons";
import styles from "../styles/App.module.scss";
import Video from "./Video";
const { Header, Footer, Content } = Layout;


function Contenta() {
    return (
<Content className={styles.contentBody}>
          <div className={styles.contentContainer}>
            <div className={styles.contentInfo}>
              <div>

                {/* Noi dung */}
                <div className={styles.rowContent} justify="center" align="middle">
                  <div span={12}>
                    <div>
                      <div>
                        <div className={styles.contentVideo}>
                        <Video />
                        </div>
                        <div className={styles.contentImage}>
                        <Image className={styles.contentImage1} src="image/a1.jpeg" preview= {false}/>
                              
                        <Image className={styles.contentImage1} src="image/a2.jpeg" preview= {false}/>
                        
                        <Image className={styles.contentImage1} src="image/a3.jpeg" preview= {false}/>
                        
                        <Image className={styles.contentImage1} src="image/a4.jpeg" preview= {false}/>
                        
                        <Image className={styles.contentImage1} src="image/a5.jpeg" preview= {false}/>

                        
                        </div>  
                        <div className={styles.contentTitleBgb}>
                          <div className="pt-4 pb-4">
                        
                        <h2 className={styles.contentTitleBg}>「人」、そして「企業」の縁を考え、社会に貢献する</h2>
                          </div>
                          <div>
                          <span contentTitle9>求職者の就職・転職と求人企業の人材採用。そして入社後の活躍・定着を実現する。<br/> 
                          私たちの事業活動における指針であり、創業以来「入社後活躍」にこだわり続けてきました。</span>
                          </div>
                          <div className="pt-4 pb-4">
                        <span className={styles.contentTitleBg}>入社後活躍、それは就・転職や採用の瞬間をゴールとするのではなく、
                        「入社者の人生の充実」「企業の業績向上への貢献」までを見据えた事業運営を行うということ。<br/>
                        これからも「入社後活躍」に強いこだわりを持ち、本業で社会に貢献し続けていきます。</span>
                          </div>
                        </div>

                      </div>
                       
                    </div>
                  </div>

                </div>

                {/* noi dung 2 */}
                <h2 className={styles.h2Content}>エン・ジャパン株式会社のPick up口コミ</h2>

                <div className={styles.contentSecond}>
                  <div>
                    < div className={styles.titleUser}>
                      <div>
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>

                  </div>
                  <div className={styles.btnBigA1}>
                  <a className={styles.aBg} href="https://en-hyouban.com/company/10007309197/user_list/"> 
                  <Button className={styles.btnBg1}>最初にユーザー登録（無料）をお願いします</Button>
                  </a>
                </div>

                
                </div>

                <h2 className={styles.h2Content}>エン・ジャパン株式会社のPick up口コミ</h2>
                <div className={`${styles.chart3} mt-8 mb-4`}>
                  <div>
                    <Image src="image/a1.png" preview={false} />
                  </div>
                  <Row className={styles.chartInfo}>
                    <Col className={styles.chartInfo1}>
                      <div className={styles.textCol}>
                        <span className={styles.textSm}>回答者の平均年収</span>
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className="" />
                        </a>
                        <span className={styles.textSm}>万円</span>
                        <span className={styles.textSmm}>（平均年齢 30.5歳）</span>
                      </div>
                    </Col>

                    <Col className={styles.chartInfo2}>
                      <div className={styles.textCol}>
                        <span className={styles.textSm}>回答者の平均年収</span>
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className="" />
                        </a>
                        <span className={styles.textSm}>万円</span>
                        <span className={styles.textSmm}>（平均年齢 30.5歳）</span>
                      </div>
                    </Col>

                  </Row>
                  <Row className={styles.tableA}>
                    <Row className={styles.tableA1}>
                      <div className={styles.tableMini}>
                        <span className={styles.spanA}>職種別平均年収</span>
                      </div>
                    </Row>
                    <Row className={styles.tableA2}>
                      <Col className={styles.tableMini2}>
                        <span className={styles.textTable}> 営業系 </span>
                        <p className={styles.textSmma}><br />（営業、MR、営業企画 他)</p>
                      </Col>
                      <Col className={styles.tableMini2}>
                        <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className="ml-6 mt-1" />
                        </a>
                        <span className={`${styles.textSma} mt-3`}>万円</span>
                        <span className={styles.textSmma1}>（（平均年齢 29.0歳）</span>

                      </Col>
                    </Row>

                    <Row className={styles.tableA2}>
                      <Col className={styles.tableMini2}>
                        <span className={styles.textTable}> 営業系 </span>
                        <p className={styles.textSmma}><br />（営業、MR、営業企画 他)</p>
                      </Col>
                      <Col className={styles.tableMini2}>
                        <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className="ml-6 mt-1" />
                        </a>
                        <span className={`${styles.textSma} mt-3`}>万円</span>
                        <span className={styles.textSmma1}>（（平均年齢 29.0歳）</span>

                      </Col>
                    </Row>

                    <Row className={styles.tableA2}>
                      <Col className={styles.tableMini2}>
                        <span className={styles.textTable}> 営業系 </span>
                        <p className={styles.textSmma}><br />（営業、MR、営業企画 他)</p>
                      </Col>
                      <Col className={styles.tableMini2}>
                        <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className="ml-6 mt-1" />
                        </a>
                        <span className={`${styles.textSma} mt-3`}>万円</span>
                        <span className={styles.textSmma1}>（（平均年齢 29.0歳）</span>

                      </Col>
                    </Row>
                  </Row>

                </div>

                <h2 className={styles.h2Content}>エン・ジャパン株式会社のPick up口コミ <span textSmma1>（4955件）</span></h2>

                <div className={styles.tableB}>
                  <div className={styles.tableMiniB}>
                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>
                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>

                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>

                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>
                  </div>


                  <div className={styles.tableMiniB}>
                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>
                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>

                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>

                    <div className={styles.tableMiniiB}>

                      <a href="https://en-hyouban.com/company/10007309197/17/" className="ml-6 mt-1">
                        <Image src="image/leave.svg" preview={false} />
                        <span style={{ color: '#333' }} className="ml-4" >福利厚生・オフィス環境 </span>
                        <span style={{ color: '##2046b4' }} className="ml-2">(685件) </span>
                        <Image src="image/right-arrow-black.svg" preview={false} className="pl-10" />
                      </a>
                    </div>
                  </div>

                </div>

                <h2 className={styles.h2Content}>エン・ジャパン株式会社の回答者別口コミ <span textSmma1>（1056件）</span></h2>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={styles.arrowF} />
                      <div ><span className={`${styles.colorTitle}`}>最新の回答：2022年04月12日</span></div>
                    </a>

                  </div>


                </div>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={styles.arrowF} />
                      <div ><span className={`${styles.colorTitle}`}>最新の回答：2022年04月12日</span></div>
                    </a>

                  </div>


                </div>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={styles.arrowF} />
                      <div ><span className={`${styles.colorTitle}`}>最新の回答：2022年04月12日</span></div>
                    </a>

                  </div>


                </div>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <div>
                      <Rate allowHalf defaultValue={4} className={styles.rateResize} /> <span className={`${styles.colorTitle11}`}>4.1</span>    
                      <span className={`${styles.colorTitle} pl-4`}>最新の回答：2022年04月12日</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={`${styles.arrowF1} `} /> 
                      </div>
                    </a>

                  </div>


                </div>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <div>
                      <Rate allowHalf defaultValue={4} className={styles.rateResize} /> <span className={`${styles.colorTitle11}`}>4.1</span>    
                      <span className={`${styles.colorTitle} pl-4`}>最新の回答：2022年04月12日</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={`${styles.arrowF1} `} /> 
                      </div>
                    </a>

                  </div>


                </div>

                <div className={styles.tableC}>
                  <div className={styles.tableMiniC}>
                    <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/4279839/" className={`${styles.colorH}`}>
                      仕入れ営業 <span className={`${styles.colorTitle}`}>正社員 / 在籍3～5年 在籍3～5年 / 現職 / 中途  女性</span>
                      <div>
                      <Rate allowHalf defaultValue={4} className={styles.rateResize} /> <span className={`${styles.colorTitle11}`}>4.1</span>    
                      <span className={`${styles.colorTitle} pl-4`}>最新の回答：2022年04月12日</span>
                      <Image src="image/right-arrow-black.svg" preview={false} className={styles.arrowF1} />
                      </div>
                    </a>

                  </div>


                </div>

                <div className={styles.btnBig}>
                  <a className={styles.aBg} href="https://en-hyouban.com/company/10007309197/user_list/"> 
                  <Button className={styles.btnBg}>回答者一覧を見る（1056件）{`>>`}</Button>
                  </a>
                </div>


    {/* test */}

    <div className={styles.contentSecond}>
                  <div className={styles.titleUsera}>
                    < div className={styles.titleUser}>
                      <div>
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div className= {styles.bgSize}>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>
                  </div>

                  
                  <div className={styles.titleUsera}>
                    < div className={styles.titleUser}>
                      <div >
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div className= {styles.bgSize}>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>
                  </div>

                  <div className={styles.titleUsera}>
                    < div className={styles.titleUser}>
                      <div >
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div className= {styles.bgSize}>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>
                  </div>

                  <div className={styles.titleUsera}>
                    < div className={styles.titleUser}>
                      <div >
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div className= {styles.bgSize}>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>
                  </div>

                  <div className={styles.titleUsera}>
                    < div className={styles.titleUser}>
                      <div >
                        <Image className={styles.imgSize} src="image/money-bg-blue.svg" preview={false} />
                      </div>
                      <div>
                        <a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle}> エン・ジャパン株式会社の評判・口コミ</a>
                        <p><a href="https://en-hyouban.com/company/10007309197/" className={styles.fontTitle1}>福利厚生・オフィス環境</a></p>
                      </div>
                      <div className={`${styles.pickUp}  mt-2`}>
                        <Image className="pl-2 " src="image/pickup.svg" preview={false} />
                        <span className={styles.fontTitle}>Pick up 口コミ</span>
                      </div>
                      <div className={`${styles.pickUp2} mt-2`}>
                        <span className={styles.fontTitle}> 2020年時点の情報</span>
                      </div>
                    </div>
                    <div className={styles.tagA}>
                      <a href="https://en-hyouban.com/company/10007309197/user_kuchikomi/2886440/">回答者：男性/ 営業/ 現職（回答時）/ 新卒入社/ 在籍3年未満/ 正社員/ 中途求人メディア事業部/ メンバー</a>
                    </div>
                    <Rate className="pt-6 pb-6" allowHalf defaultValue={4} /> <span className={styles.spanContent}> 4.8</span>
                  </div>
                  <div className= {styles.bgSize}>
                    <div>
                      <span>
                        福利厚生:必要最低限はあります。欲を言えば住宅手当or在宅勤務手当みたいなものが出ればありがたいです。オフィス環境:オフィスも十分広く
                        、働きやすい環境です。また、自分の席は特に固定されていないため、自由な場所で働くことができます。個室の会議
                      </span>

                    </div>
                    <div className={styles.posI}>
                      <div >
                        <LikeOutlined className={styles.btnS}><span>10000</span></LikeOutlined>
                        <TwitterOutlined className={styles.btnS} />
                        <FacebookOutlined className={styles.btnS} />
                        <LinkOutlined className={styles.btnS} />
                      </div>
                      <div >
                        <a className={styles.nutLinka} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">報告する</a>
                      </div>
                      <div className=" pl-4">
                        <a className={styles.nutLinkb} href="https://en-hyouban.com/inquiry/?kuchikomi_id=5222067&company_id=10007309197">口コミURL</a>
                      </div>

                    </div>
                  </div>


                
                </div>


                <div className={styles.contentFooter}>
                  <h2 className={styles.contentH2}>気になる企業の口コミを見よう</h2>
                    <Image  src="image/company-survey.jpeg" preview={false}/>

                    <div className={styles.btnBigA1}>
                  <a className={styles.aBg} href="https://en-hyouban.com/company/10007309197/user_list/"> 
                  <Button className={styles.btnBglast}>最初にユーザー登録（無料）をお願いします</Button>
                  </a>
                </div>
                </div>
              </div>
                {/* Side */}
              <div>
                <Row className={styles.rowInfo} justify="center" align="middle">
                  <div display="flex" align="center">
                    <Col span={12}>
                      <div className=" pt-5 pb-5">
                        <Button className={styles.btnRightContent} block>
                          口コミを投稿する
                        </Button>
                        <Button
                          className={`${styles.btnRightContent} mt-3`} block>
                          + フォローする
                        </Button>
                      </div>
                    </Col>
                  </div>
                </Row>
                <Row
                  className={styles.sideInfo}
                  justify="center"
                  align="middle"
                >
                  <Col span={6} offset={6} className={styles.imgRuler}>
                    <div className={styles.infoImg}>
                      <Image
                        src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png"
                        preview={false}
                      />
                    </div>
                  </Col>
                  <div className={styles.titleImage}>
                    <span className="pl-2">会社名</span>
                    <span className={`${styles.titleText} pr-2`}>
                      エン・ジャパン株式会社
                    </span>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">業界</div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <a href="https://en-hyouban.com/search/industry/sonohokanosabisugyo/shokugyoshokai-rodoshahaken/shokugyoshokai/">
                        その他のサービス業・職業紹介・労働者派遣・職業紹介
                      </a>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">URL</div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <a href="https://en-hyouban.com/search/industry/sonohokanosabisugyo/shokugyoshokai-rodoshahaken/shokugyoshokai/">
                        {" "}
                        https://corp.en-japan.com/
                      </a>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">所在地 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span>
                        {" "}
                        東京都新宿区西新宿6丁目5-1新宿アイランドタワー
                      </span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">従業員数 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span>1657名</span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">連結従業員数 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span> 3575名</span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">設立年 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span>2000年</span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">上場年</div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span>2001年</span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">平均年収 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span>500万円</span>
                    </div>
                  </div>

                  <div className={styles.titleImage}>
                    <div className="pl-2 pt-2 pb-2">平均年齢 </div>
                    <div
                      className={`${styles.titleText} pr-2 pt-2 pb-2`}
                      style={{ width: 140 }}
                    >
                      <span> 29.8歳</span>
                    </div>
                  </div>

                  <div className={styles.titleImagel}>
                    <span className="pl-2 pt-2 pb-2">
                      ※ 一部、四季報データ参照{" "}
                    </span>
                  </div>
                </Row>
                {/* 1 */}
                <Row className={styles.sideInfo}>
                  <Col className={`${styles.sideImage}`}>
                    <div className={styles.sideApp}>
                      <div className={styles.contentTitle}>
                        <h5 className=" pl-4 pt-6"> 項目別ランキング</h5>
                      </div>
                      <div className={styles.contentTitle}>
                        <h5 className=" pb-4 pl-4 "> 会社の総合評価</h5>
                      </div>
                    </div>
                  </Col>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/gold.svg"></img>
                      <span className={styles.fontContent}>
                        <br />1
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00001246365.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate allowHalf defaultValue={3.5} className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/silver.svg"></img>
                      <span className={styles.fontContent}>
                        <br />2
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00005721829.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate allowHalf defaultValue={3.5} className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/cooper.svg"></img>
                      <span className={styles.fontContent}>
                        <br />3
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/10007547943.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate allowHalf defaultValue={3.5} className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />4
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-10 `} src="image/logo-673321d6-5abe-4ef0-8903-c18a363162fb.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate allowHalf defaultValue={3.5} className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />5
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-11">
                      <h5>株式会社メイテック</h5>
                      <Rate allowHalf defaultValue={3.5} className={styles.rateResize} /> <span>2.9</span>
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                </Row>

                {/* 2 */}

                <Row className={styles.sideInfo}>
                  <Col className={`${styles.sideImage}`}>
                    <div className={styles.sideApp}>
                      <div className={styles.contentTitle}>
                        <h5 className=" pl-4 pt-6"> 項目別ランキング</h5>
                      </div>
                      <div className={styles.contentTitle}>
                        <h5 className=" pb-4 pl-4 "> 会社の総合評価</h5>
                      </div>
                    </div>
                  </Col>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/gold.svg"></img>
                      <span className={styles.fontContent}>
                        <br />1
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00001246365.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/silver.svg"></img>
                      <span className={styles.fontContent}>
                        <br />2
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00005721829.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/cooper.svg"></img>
                      <span className={styles.fontContent}>
                        <br />3
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/10007547943.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />4
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-10 `} src="image/logo-673321d6-5abe-4ef0-8903-c18a363162fb.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />5
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-11">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} /> <span>2.9</span>
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                </Row>
                {/* 3 */}
                <Row className={styles.sideInfo}>
                  <Col className={`${styles.sideImage}`}>
                    <div className={styles.sideApp}>
                      <div className={styles.contentTitle}>
                        <h5 className=" pl-4 pt-6"> 項目別ランキング</h5>
                      </div>
                      <div className={styles.contentTitle}>
                        <h5 className=" pb-4 pl-4 "> 会社の総合評価</h5>
                      </div>
                    </div>
                  </Col>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/gold.svg"></img>
                      <span className={styles.fontContent}>
                        <br />1
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00001246365.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/silver.svg"></img>
                      <span className={styles.fontContent}>
                        <br />2
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00005721829.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/cooper.svg"></img>
                      <span className={styles.fontContent}>
                        <br />3
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/10007547943.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />4
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-10 `} src="image/logo-673321d6-5abe-4ef0-8903-c18a363162fb.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />5
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-11">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} /> <span>2.9</span>
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                </Row>
                {/* 4 */}
                <Row className={styles.sideInfo}>
                  <Col className={`${styles.sideImage}`}>
                    <div className={styles.sideApp}>
                      <div className={styles.contentTitle}>
                        <h5 className=" pl-4 pt-6"> 項目別ランキング</h5>
                      </div>
                      <div className={styles.contentTitle}>
                        <h5 className=" pb-4 pl-4 "> 会社の総合評価</h5>
                      </div>
                    </div>
                  </Col>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/gold.svg"></img>
                      <span className={styles.fontContent}>
                        <br />1
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00001246365.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/silver.svg"></img>
                      <span className={styles.fontContent}>
                        <br />2
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00005721829.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/cooper.svg"></img>
                      <span className={styles.fontContent}>
                        <br />3
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/10007547943.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />4
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-10 `} src="image/logo-673321d6-5abe-4ef0-8903-c18a363162fb.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />5
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-11">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} /> <span>2.9</span>
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                </Row>
                {/* 5 */}
                <Row className={styles.sideInfo}>
                  <Col className={`${styles.sideImage}`}>
                    <div className={styles.sideApp}>
                      <div className={styles.contentTitle}>
                        <h5 className=" pl-4 pt-6"> 項目別ランキング</h5>
                      </div>
                      <div className={styles.contentTitle}>
                        <h5 className=" pb-4 pl-4 "> 会社の総合評価</h5>
                      </div>
                    </div>
                  </Col>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/gold.svg"></img>
                      <span className={styles.fontContent}>
                        <br />1
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00001246365.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/silver.svg"></img>
                      <span className={styles.fontContent}>
                        <br />2
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/00005721829.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-6">
                      <img alt="" src="https://d1uoy7w9kqjh3s.cloudfront.net/images/user/svg-icon/hyo/cooper.svg"></img>
                      <span className={styles.fontContent}>
                        <br />3
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/10007547943.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />4
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-10 `} src="image/logo-673321d6-5abe-4ef0-8903-c18a363162fb.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-4">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} />
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                  <Row className={styles.sideBody}>
                    <Col className="pl-4 pt-4">
                      <span className={styles.fontContent}>
                        <br />5
                      </span>
                    </Col>
                    <Col>
                      <a href="https://en-hyouban.com/company/10003407960/">
                        <Image
                          className={`${styles.imgResize} pl-2 pt-9 `} src="image/logo-ba9041e8-fd7a-45de-a100-0df47f1954d1.png" align="middle" preview={false}
                        />
                      </a>
                    </Col>
                    <Col className="pl-11">
                      <h5>株式会社メイテック</h5>
                      <Rate className={styles.rateResize} /> <span>2.9</span>
                      <p className={styles.textContent}>口コミ(2228件)</p>
                    </Col>
                    <ArrowRightOutlined className="pt-9 pl-6" />
                  </Row>

                </Row>
                <div >

                  <Row className={styles.sideInfo}>
                    <Col >
                      <div className={`${styles.sideCol} pl-4 pt-6 pb-4`}>
                        <h5 >他の企業を見る </h5>
                      </div>
                    </Col>
                    <Row className={styles.colSide}>
                      <Col className={styles.lastCol}>
                        <a href="https://en-hyouban.com/company/10003407960/">
                          <Image
                            className={`${styles.imgResize} pl-2 pt-9 `} src="image/1.png" align="middle" preview={false} />
                        </a>
                        <div >
                          <Rate className={`${styles.rateResizeCol} pt-4`} />
                        </div>
                        <div>
                          <span className="pl-7">(2.9) </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <h5 className="pl-4 pt-4">株式会社スタッフサービス</h5>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>口コミ(6050件))<br className={styles.titleBold} />平均年収（正社員）</p>

                        </div>
                        <div className={styles.sideRow}>

                          <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                            <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          </a>
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>残業時間（月間）</p>
                        </div>
                        <div>
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                      </Col>
                    </Row>
                    <div className="ml-4">
                      <Image src="image/comment.svg" preview={false} />
                      <span className="ml-2">社員口コミ</span>
                      <a href="https://en-hyouban.com/company/10006516849/user_kuchikomi/3993664/">
                        <p className={`${styles.pSide}`}>回答者：男性 / スーパーバイザー / 現職（回答時）/<br />  中途入社 / 在籍6～10年 / 正社員</p>
                      </a>

                    </div>
                    <div className={`${styles.bottomBorder} ml-4`}>
                      <span className={styles.spSide}>企業カルチャー・社風:</span>
                      <span className={styles.spanSide}>上司であっても、〜さん、と役職名なしで呼ぶことになっていて、...</span>
                      <a href="https://en-hyouban.com/company/10006516849/kuchikomi/6782331/"><br /> (続きを見る)</a>
                    </div>

                    {/* 2 */}

                    <Row className={styles.colSide}>
                      <Col className={styles.lastCol}>
                        <a href="https://en-hyouban.com/company/10003407960/">
                          <Image
                            className={`${styles.imgResize} pl-2 pt-9 `} src="image/1.png" align="middle" preview={false} />
                        </a>
                        <div >
                          <Rate className={`${styles.rateResizeCol} pt-4`} />
                        </div>
                        <div>
                          <span className="pl-7">(2.9) </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <h5 className="pl-4 pt-4">株式会社スタッフサービス</h5>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>口コミ(6050件))<br className={styles.titleBold} />平均年収（正社員）</p>

                        </div>
                        <div className={styles.sideRow}>

                          <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                            <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          </a>
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>残業時間（月間）</p>
                        </div>
                        <div>
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                      </Col>
                    </Row>
                    <div className="ml-4">
                      <Image src="image/comment.svg" preview={false} />
                      <span className="ml-2">社員口コミ</span>
                      <a href="https://en-hyouban.com/company/10006516849/user_kuchikomi/3993664/">
                        <p className={`${styles.pSide}`}>回答者：男性 / スーパーバイザー / 現職（回答時）/<br />  中途入社 / 在籍6～10年 / 正社員</p>
                      </a>

                    </div>
                    <div className={`${styles.bottomBorder} ml-4`}>
                      <span className={styles.spSide}>企業カルチャー・社風:</span>
                      <span className={styles.spanSide}>上司であっても、〜さん、と役職名なしで呼ぶことになっていて、...</span>
                      <a href="https://en-hyouban.com/company/10006516849/kuchikomi/6782331/"><br /> (続きを見る)</a>
                    </div>

                    {/* 3 */}

                    <Row className={styles.colSide}>
                      <Col className={styles.lastCol}>
                        <a href="https://en-hyouban.com/company/10003407960/">
                          <Image
                            className={`${styles.imgResize} pl-2 pt-9 `} src="image/1.png" align="middle" preview={false} />
                        </a>
                        <div >
                          <Rate className={`${styles.rateResizeCol} pt-4`} />
                        </div>
                        <div>
                          <span className="pl-7">(2.9) </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <h5 className="pl-4 pt-4">株式会社スタッフサービス</h5>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>口コミ(6050件))<br className={styles.titleBold} />平均年収（正社員）</p>

                        </div>
                        <div className={styles.sideRow}>

                          <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                            <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          </a>
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>残業時間（月間）</p>
                        </div>
                        <div>
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                      </Col>
                    </Row>
                    <div className="ml-4">
                      <Image src="image/comment.svg" preview={false} />
                      <span className="ml-2">社員口コミ</span>
                      <a href="https://en-hyouban.com/company/10006516849/user_kuchikomi/3993664/">
                        <p className={`${styles.pSide}`}>回答者：男性 / スーパーバイザー / 現職（回答時）/<br />  中途入社 / 在籍6～10年 / 正社員</p>
                      </a>

                    </div>
                    <div className={`${styles.bottomBorder} ml-4`}>
                      <span className={styles.spSide}>企業カルチャー・社風:</span>
                      <span className={styles.spanSide}>上司であっても、〜さん、と役職名なしで呼ぶことになっていて、...</span>
                      <a href="https://en-hyouban.com/company/10006516849/kuchikomi/6782331/"><br /> (続きを見る)</a>
                    </div>
                    {/* 4 */}

                    <Row className={styles.colSide}>
                      <Col className={styles.lastCol}>
                        <a href="https://en-hyouban.com/company/10003407960/">
                          <Image
                            className={`${styles.imgResize} pl-2 pt-9 `} src="image/1.png" align="middle" preview={false} />
                        </a>
                        <div >
                          <Rate className={`${styles.rateResizeCol} pt-4`} />
                        </div>
                        <div>
                          <span className="pl-7">(2.9) </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <h5 className="pl-4 pt-4">株式会社スタッフサービス</h5>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>口コミ(6050件))<br className={styles.titleBold} />平均年収（正社員）</p>

                        </div>
                        <div className={styles.sideRow}>

                          <a href="https://en-hyouban.com/user/register/?companytop_other_company_salary">
                            <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          </a>
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                        <div>
                          <p className={`${styles.sizeCol} pl-4`}>残業時間（月間）</p>
                        </div>
                        <div>
                          <Image style={{ width: 65 }} src="image/button_register.png" preview={false} className=" pl-4" />
                          <span className={`${styles.spanSide} pl-2`}>万円</span>
                        </div>
                      </Col>
                    </Row>
                    <div className="ml-4 mr-2">
                      <Image src="image/comment.svg" preview={false} />
                      <span className="ml-2">社員口コミ</span>
                      <a href="https://en-hyouban.com/company/10006516849/user_kuchikomi/3993664/">
                        <p className={`${styles.pSide}`}>回答者：男性 / スーパーバイザー / 現職（回答時）/<br />  中途入社 / 在籍6～10年 / 正社員</p>
                      </a>

                    </div>
                    <div className={`${styles.bottomBorder} ml-4`}>
                      <span className={styles.spSide}>企業カルチャー・社風:</span>
                      <span className={styles.spanSide}>上司であっても、〜さん、と役職名なしで呼ぶことになっていて、...</span>
                      <a href="https://en-hyouban.com/company/10006516849/kuchikomi/6782331/"><br /> (続きを見る)</a>
                    </div>



                  </Row>
                </div>
              </div>
            </div>
          </div>
         

        </Content>
    )
}

export default Contenta