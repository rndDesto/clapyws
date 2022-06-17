import { FC, memo } from 'react';

import { _2Icon } from './_2Icon';
import { AccordionSimple } from './AccordionSimple/AccordionSimple';
import { AttributTab2 } from './AttributTab2/AttributTab2';
import { AttributTab3 } from './AttributTab3/AttributTab3';
import { AttributTab } from './AttributTab/AttributTab';
import { Button } from './Button/Button';
import { CalendarIcon } from './CalendarIcon';
import { CalendarIcon2 } from './CalendarIcon2';
import { Chevron_downIcon } from './Chevron_downIcon';
import { Chevron_downIcon2 } from './Chevron_downIcon2';
import { Chevron_leftIcon } from './Chevron_leftIcon';
import { Chevron_leftIcon2 } from './Chevron_leftIcon2';
import { Chevron_leftIcon3 } from './Chevron_leftIcon3';
import { Chevron_rightIcon } from './Chevron_rightIcon';
import { Chevron_rightIcon2 } from './Chevron_rightIcon2';
import { Chevron_rightIcon3 } from './Chevron_rightIcon3';
import { Ellipse314Icon } from './Ellipse314Icon';
import { Ellipse315Icon } from './Ellipse315Icon';
import { Ellipse316Icon } from './Ellipse316Icon';
import { Ellipse317Icon } from './Ellipse317Icon';
import { Ellipse318Icon } from './Ellipse318Icon';
import { FieldOutline2 } from './FieldOutline2/FieldOutline2';
import { FieldOutline } from './FieldOutline/FieldOutline';
import { Header } from './Header/Header';
import { HeaderTitle } from './HeaderTitle/HeaderTitle';
import { IconsActionsExpand_moreIcon } from './IconsActionsExpand_moreIcon';
import { IconsActionsExpand_moreIcon2 } from './IconsActionsExpand_moreIcon2';
import { IconsActionsExpand_moreIcon3 } from './IconsActionsExpand_moreIcon3';
import { IconsActionsExpand_moreIcon4 } from './IconsActionsExpand_moreIcon4';
import { IconsNavigationDashboardIcon } from './IconsNavigationDashboardIcon';
import { IconsNavigationExitIcon } from './IconsNavigationExitIcon';
import { InformationIcon } from './InformationIcon';
import { InformationIcon2 } from './InformationIcon2';
import classes from './Logee1440.module.css';
import { Logo40x40 } from './Logo40x40/Logo40x40';
import { Logo40x402 } from './Logo40x402/Logo40x402';
import { LogoTrans40x40ReversIcon } from './LogoTrans40x40ReversIcon';
import { NoteIcon } from './NoteIcon';
import { Npct1Icon } from './Npct1Icon';
import { PenagihanIcon } from './PenagihanIcon';
import { RemixIconsFillDocumentBillFill } from './RemixIconsFillDocumentBillFill';
import { RemixIconsFillDocumentBillFill2 } from './RemixIconsFillDocumentBillFill2';
import { RemixIconsFillFinanceBankCardF } from './RemixIconsFillFinanceBankCardF';
import { RemixIconsFillFinanceExchangeF } from './RemixIconsFillFinanceExchangeF';
import { RemixIconsFillMapShip2FillIcon } from './RemixIconsFillMapShip2FillIcon';
import { RemixIconsFillMapTruckFillIcon } from './RemixIconsFillMapTruckFillIcon';
import { ShipIcon } from './ShipIcon';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    sideMenu?: string;
    top?: string;
    sideMenu2?: string;
    frame36484?: string;
    logoTrans40x40Revers?: string;
    text?: string;
    line?: string;
    sideMenu_dashboard?: string;
    frame364842?: string;
    iconsNavigationDashboard?: string;
    text2?: string;
    line2?: string;
    sideMenuJadwalKapal?: string;
    frame364843?: string;
    penagihan?: string;
    text3?: string;
    line3?: string;
    sideMenu3?: string;
    frame364844?: string;
    note?: string;
    text4?: string;
    line4?: string;
    sideMenuJadwalKapal2?: string;
    frame364845?: string;
    ship?: string;
    text5?: string;
    line5?: string;
    bottom?: string;
    sideMenu4?: string;
    frame364846?: string;
    iconsNavigationExit?: string;
    text6?: string;
    line6?: string;
    mainContent?: string;
    blockTransaksi?: string;
    header?: string;
    title?: string;
    filter?: string;
    dateRange?: string;
    unnamed?: string;
    blockCard?: string;
    sectionTop?: string;
    card?: string;
    title2?: string;
    icon?: string;
    remixIconsFillMapShip2Fill?: string;
    transaksiProforma?: string;
    content2?: string;
    info?: string;
    head?: string;
    totalJumlahTransaksi?: string;
    unnamed2?: string;
    info2?: string;
    head2?: string;
    totalJumlahKontainer?: string;
    unnamed3?: string;
    info3?: string;
    head3?: string;
    totalNilaiTransaksi?: string;
    unnamed4?: string;
    sectionBottom?: string;
    card2?: string;
    icon2?: string;
    head4?: string;
    transaksiPaylater?: string;
    rp0?: string;
    info4?: string;
    unnamed5?: string;
    transaksi?: string;
    card3?: string;
    icon3?: string;
    nPCT1?: string;
    head5?: string;
    transaksiAutoCollection?: string;
    rp02?: string;
    info5?: string;
    unnamed6?: string;
    transaksi2?: string;
    card4?: string;
    icon4?: string;
    remixIconsFillDocumentBillFill?: string;
    head6?: string;
    transaksiVirtualAccout?: string;
    rp03?: string;
    info6?: string;
    unnamed7?: string;
    transaksi3?: string;
    blockCard2?: string;
    sectionTop2?: string;
    card5?: string;
    frame6433?: string;
    icon5?: string;
    remixIconsFillMapTruckFill?: string;
    transaksiTruk?: string;
    frame36541?: string;
    frame64332?: string;
    head7?: string;
    totalJumlahKontainer2?: string;
    unnamed8?: string;
    frame6434?: string;
    head8?: string;
    totalJumlahTransaksi2?: string;
    unnamed9?: string;
    frame64333?: string;
    head9?: string;
    totalNilaiTransaksi2?: string;
    rp04?: string;
    sectionBottom2?: string;
    card6?: string;
    icon6?: string;
    head10?: string;
    transaksiPaylater2?: string;
    rp05?: string;
    info7?: string;
    unnamed10?: string;
    transaksi4?: string;
    card7?: string;
    icon7?: string;
    remixIconsFillDocumentBillFill2?: string;
    head11?: string;
    transaksiInvoiceAcceptance?: string;
    rp06?: string;
    info8?: string;
    unnamed11?: string;
    transaksi5?: string;
    card8?: string;
    icon8?: string;
    remixIconsFillFinanceBankCardF?: string;
    head12?: string;
    transaksiKartuKredit?: string;
    rp07?: string;
    info9?: string;
    unnamed12?: string;
    transaksi6?: string;
    card9?: string;
    icon9?: string;
    remixIconsFillFinanceExchangeF?: string;
    head13?: string;
    transaksiInternalB2B?: string;
    rp08?: string;
    info10?: string;
    unnamed13?: string;
    transaksi7?: string;
    blockRingkasan?: string;
    header2?: string;
    _1?: string;
    ringkasanLaporan?: string;
    _2?: string;
    inputTextActivatedIcon?: string;
    inputBorder?: string;
    buttonBorder?: string;
    iconsActionsExpand_more?: string;
    inputTextField?: string;
    sectionFlex?: string;
    card10?: string;
    header3?: string;
    _12?: string;
    proformaKontainer?: string;
    _22?: string;
    inputTextActivatedIcon2?: string;
    inputBorder2?: string;
    buttonBorder2?: string;
    iconsActionsExpand_more2?: string;
    inputTextField2?: string;
    select?: string;
    chevron_left?: string;
    _2022?: string;
    chevron_right?: string;
    info11?: string;
    infoNoData?: string;
    belumAdaData?: string;
    card11?: string;
    header4?: string;
    _13?: string;
    imporEkspor?: string;
    _23?: string;
    inputTextActivatedIcon3?: string;
    inputBorder3?: string;
    buttonBorder3?: string;
    iconsActionsExpand_more3?: string;
    inputTextField3?: string;
    select2?: string;
    chevron_left2?: string;
    _20222?: string;
    chevron_right2?: string;
    info12?: string;
    infoNoData2?: string;
    belumAdaData2?: string;
    sectionFlex2?: string;
    card12?: string;
    header5?: string;
    _14?: string;
    proformaKontainer2?: string;
    _24?: string;
    inputTextActivatedIcon4?: string;
    inputBorder4?: string;
    buttonBorder4?: string;
    iconsActionsExpand_more4?: string;
    inputTextField4?: string;
    select3?: string;
    chevron_left3?: string;
    _20223?: string;
    chevron_right3?: string;
    info13?: string;
    infoNoData3?: string;
    belumAdaData3?: string;
    blockAktivitas?: string;
    header6?: string;
    _15?: string;
    laporanAktivitasHariIni?: string;
    _25?: string;
    card13?: string;
    alert?: string;
    title3?: string;
    calendar?: string;
    periodeLaporan5April202200240W?: string;
    info14?: string;
    sectionTop3?: string;
    card14?: string;
    title4?: string;
    pesananTruk?: string;
    pantauPerkembanganSemuaAktivit?: string;
    detail?: string;
    title5?: string;
    unnamed14?: string;
    totalPesanan?: string;
    content3?: string;
    list?: string;
    info15?: string;
    ellipse314?: string;
    menungguKonfirmasi?: string;
    info16?: string;
    ellipse315?: string;
    pesananTerkonfirmasi?: string;
    info17?: string;
    ellipse316?: string;
    dalamPerjalanan?: string;
    info18?: string;
    ellipse317?: string;
    selesai?: string;
    info19?: string;
    ellipse318?: string;
    batal?: string;
    unnamed15?: string;
    unnamed16?: string;
    unnamed17?: string;
    unnamed18?: string;
    unnamed19?: string;
    _26?: string;
    sectionBottom3?: string;
    title6?: string;
    proformaHariIni?: string;
    lihatInformasiTerkiniDariProfo?: string;
    detail2?: string;
    info20?: string;
    title7?: string;
    telahDibayar?: string;
    information?: string;
    rp09?: string;
    info21?: string;
    title8?: string;
    belumDibayar?: string;
    information2?: string;
    rp010?: string;
    blockTransaksi2?: string;
    card15?: string;
    header7?: string;
    title9?: string;
    nilaiTransaksiConsigneeTerbesa?: string;
    background?: string;
    content4?: string;
    text7?: string;
    belumAdaTransaksi?: string;
    laporanProformaAkanDitampilkan?: string;
    blockLaporan?: string;
    header8?: string;
    title10?: string;
    nilaiTransaksiConsigneeTerbesa2?: string;
    tabs?: string;
    background2?: string;
    card16?: string;
    alert2?: string;
    frame36486?: string;
    calendar2?: string;
    periodeLaporan2021?: string;
    pembaruanTerakhir21Mei202190WI?: string;
    collapse?: string;
    section?: string;
    header9?: string;
    info22?: string;
    totalNilaiTransaksi3?: string;
    akumulasiSeluruhTransaksiYangB?: string;
    chevron_down?: string;
    content5?: string;
    text8?: string;
    total?: string;
    rp011?: string;
    section2?: string;
    header10?: string;
    info23?: string;
    jumlahTransaksi?: string;
    totalNilaiTransaksiMelaluiSemu?: string;
    chevron_down2?: string;
    content6?: string;
    text9?: string;
    total2?: string;
    rp012?: string;
    logeePort2022?: string;
  };
}
export const Logee1440: FC<Props> = memo(function Logee1440(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Header />
      <div className={`${classes.content} ${props.classes?.content || ''}`}>
        <div className={`${classes.sideMenu} ${props.classes?.sideMenu || ''}`}>
          <div className={`${classes.top} ${props.classes?.top || ''}`}>
            <div className={`${classes.sideMenu2} ${props.classes?.sideMenu2 || ''}`}>
              <div className={`${classes.frame36484} ${props.classes?.frame36484 || ''}`}>
                <LogoTrans40x40ReversIcon
                  className={`${classes.logoTrans40x40Revers} ${props.classes?.logoTrans40x40Revers || ''}`}
                />
                <div className={`${classes.text} ${props.classes?.text || ''}`}>SSO Logee Port</div>
              </div>
              <div className={`${classes.line} ${props.classes?.line || ''}`}></div>
            </div>
            <AccordionSimple />
            <div className={`${classes.sideMenu_dashboard} ${props.classes?.sideMenu_dashboard || ''}`}>
              <div className={`${classes.frame364842} ${props.classes?.frame364842 || ''}`}>
                <IconsNavigationDashboardIcon
                  className={`${classes.iconsNavigationDashboard} ${props.classes?.iconsNavigationDashboard || ''}`}
                />
                <div className={`${classes.text2} ${props.classes?.text2 || ''}`}>Dashboard</div>
              </div>
              <div className={`${classes.line2} ${props.classes?.line2 || ''}`}></div>
            </div>
            <div className={`${classes.sideMenuJadwalKapal} ${props.classes?.sideMenuJadwalKapal || ''}`}>
              <div className={`${classes.frame364843} ${props.classes?.frame364843 || ''}`}>
                <PenagihanIcon className={`${classes.penagihan} ${props.classes?.penagihan || ''}`} />
                <div className={`${classes.text3} ${props.classes?.text3 || ''}`}>Penagihan</div>
              </div>
              <div className={`${classes.line3} ${props.classes?.line3 || ''}`}></div>
            </div>
            <div className={`${classes.sideMenu3} ${props.classes?.sideMenu3 || ''}`}>
              <div className={`${classes.frame364844} ${props.classes?.frame364844 || ''}`}>
                <NoteIcon className={`${classes.note} ${props.classes?.note || ''}`} />
                <div className={`${classes.text4} ${props.classes?.text4 || ''}`}>Laporan Proforma</div>
              </div>
              <div className={`${classes.line4} ${props.classes?.line4 || ''}`}></div>
            </div>
            <div className={`${classes.sideMenuJadwalKapal2} ${props.classes?.sideMenuJadwalKapal2 || ''}`}>
              <div className={`${classes.frame364845} ${props.classes?.frame364845 || ''}`}>
                <ShipIcon className={`${classes.ship} ${props.classes?.ship || ''}`} />
                <div className={`${classes.text5} ${props.classes?.text5 || ''}`}>Jadwal Kapal</div>
              </div>
              <div className={`${classes.line5} ${props.classes?.line5 || ''}`}></div>
            </div>
          </div>
          <div className={`${classes.bottom} ${props.classes?.bottom || ''}`}>
            <div className={`${classes.sideMenu4} ${props.classes?.sideMenu4 || ''}`}>
              <div className={`${classes.frame364846} ${props.classes?.frame364846 || ''}`}>
                <IconsNavigationExitIcon
                  className={`${classes.iconsNavigationExit} ${props.classes?.iconsNavigationExit || ''}`}
                />
                <div className={`${classes.text6} ${props.classes?.text6 || ''}`}>Logout</div>
              </div>
              <div className={`${classes.line6} ${props.classes?.line6 || ''}`}></div>
            </div>
          </div>
        </div>
        <div className={`${classes.mainContent} ${props.classes?.mainContent || ''}`}>
          <HeaderTitle />
          <div className={`${classes.blockTransaksi} ${props.classes?.blockTransaksi || ''}`}>
            <div className={`${classes.header} ${props.classes?.header || ''}`}>
              <div className={`${classes.title} ${props.classes?.title || ''}`}>Transaksi Per Periode</div>
              <div className={`${classes.filter} ${props.classes?.filter || ''}`}>
                <div className={`${classes.dateRange} ${props.classes?.dateRange || ''}`}>
                  <FieldOutline />
                  <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}>-</div>
                  <FieldOutline2 />
                </div>
                <Button />
              </div>
            </div>
            <div className={`${classes.blockCard} ${props.classes?.blockCard || ''}`}>
              <div className={`${classes.sectionTop} ${props.classes?.sectionTop || ''}`}>
                <div className={`${classes.card} ${props.classes?.card || ''}`}>
                  <div className={`${classes.title2} ${props.classes?.title2 || ''}`}>
                    <div className={`${classes.icon} ${props.classes?.icon || ''}`}>
                      <RemixIconsFillMapShip2FillIcon
                        className={`${classes.remixIconsFillMapShip2Fill} ${
                          props.classes?.remixIconsFillMapShip2Fill || ''
                        }`}
                      />
                    </div>
                    <div className={`${classes.transaksiProforma} ${props.classes?.transaksiProforma || ''}`}>
                      Transaksi Proforma
                    </div>
                  </div>
                  <div className={`${classes.content2} ${props.classes?.content2 || ''}`}>
                    <div className={`${classes.info} ${props.classes?.info || ''}`}>
                      <div className={`${classes.head} ${props.classes?.head || ''}`}>
                        <div className={`${classes.totalJumlahTransaksi} ${props.classes?.totalJumlahTransaksi || ''}`}>
                          Total Jumlah Transaksi
                        </div>
                      </div>
                      <div className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>0</div>
                    </div>
                    <div className={`${classes.info2} ${props.classes?.info2 || ''}`}>
                      <div className={`${classes.head2} ${props.classes?.head2 || ''}`}>
                        <div className={`${classes.totalJumlahKontainer} ${props.classes?.totalJumlahKontainer || ''}`}>
                          Total Jumlah Kontainer
                        </div>
                      </div>
                      <div className={`${classes.unnamed3} ${props.classes?.unnamed3 || ''}`}>0</div>
                    </div>
                    <div className={`${classes.info3} ${props.classes?.info3 || ''}`}>
                      <div className={`${classes.head3} ${props.classes?.head3 || ''}`}>
                        <div className={`${classes.totalNilaiTransaksi} ${props.classes?.totalNilaiTransaksi || ''}`}>
                          Total Nilai Transaksi
                        </div>
                      </div>
                      <div className={`${classes.unnamed4} ${props.classes?.unnamed4 || ''}`}>0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes.sectionBottom} ${props.classes?.sectionBottom || ''}`}>
                <div className={`${classes.card2} ${props.classes?.card2 || ''}`}>
                  <div className={`${classes.icon2} ${props.classes?.icon2 || ''}`}>
                    <Logo40x40 />
                  </div>
                  <div className={`${classes.head4} ${props.classes?.head4 || ''}`}>
                    <div className={`${classes.transaksiPaylater} ${props.classes?.transaksiPaylater || ''}`}>
                      Transaksi Paylater
                    </div>
                  </div>
                  <div className={`${classes.rp0} ${props.classes?.rp0 || ''}`}>Rp0</div>
                  <div className={`${classes.info4} ${props.classes?.info4 || ''}`}>
                    <div className={`${classes.unnamed5} ${props.classes?.unnamed5 || ''}`}>0</div>
                    <div className={`${classes.transaksi} ${props.classes?.transaksi || ''}`}>Transaksi</div>
                  </div>
                </div>
                <div className={`${classes.card3} ${props.classes?.card3 || ''}`}>
                  <div className={`${classes.icon3} ${props.classes?.icon3 || ''}`}>
                    <Npct1Icon className={`${classes.nPCT1} ${props.classes?.nPCT1 || ''}`} />
                  </div>
                  <div className={`${classes.head5} ${props.classes?.head5 || ''}`}>
                    <div
                      className={`${classes.transaksiAutoCollection} ${props.classes?.transaksiAutoCollection || ''}`}
                    >
                      Transaksi Auto Collection
                    </div>
                  </div>
                  <div className={`${classes.rp02} ${props.classes?.rp02 || ''}`}>Rp0</div>
                  <div className={`${classes.info5} ${props.classes?.info5 || ''}`}>
                    <div className={`${classes.unnamed6} ${props.classes?.unnamed6 || ''}`}>0</div>
                    <div className={`${classes.transaksi2} ${props.classes?.transaksi2 || ''}`}>Transaksi</div>
                  </div>
                </div>
                <div className={`${classes.card4} ${props.classes?.card4 || ''}`}>
                  <div className={`${classes.icon4} ${props.classes?.icon4 || ''}`}>
                    <RemixIconsFillDocumentBillFill
                      className={`${classes.remixIconsFillDocumentBillFill} ${
                        props.classes?.remixIconsFillDocumentBillFill || ''
                      }`}
                    />
                  </div>
                  <div className={`${classes.head6} ${props.classes?.head6 || ''}`}>
                    <div className={`${classes.transaksiVirtualAccout} ${props.classes?.transaksiVirtualAccout || ''}`}>
                      Transaksi Virtual Accout
                    </div>
                  </div>
                  <div className={`${classes.rp03} ${props.classes?.rp03 || ''}`}>Rp0</div>
                  <div className={`${classes.info6} ${props.classes?.info6 || ''}`}>
                    <div className={`${classes.unnamed7} ${props.classes?.unnamed7 || ''}`}>0</div>
                    <div className={`${classes.transaksi3} ${props.classes?.transaksi3 || ''}`}>Transaksi</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.blockCard2} ${props.classes?.blockCard2 || ''}`}>
              <div className={`${classes.sectionTop2} ${props.classes?.sectionTop2 || ''}`}>
                <div className={`${classes.card5} ${props.classes?.card5 || ''}`}>
                  <div className={`${classes.frame6433} ${props.classes?.frame6433 || ''}`}>
                    <div className={`${classes.icon5} ${props.classes?.icon5 || ''}`}>
                      <RemixIconsFillMapTruckFillIcon
                        className={`${classes.remixIconsFillMapTruckFill} ${
                          props.classes?.remixIconsFillMapTruckFill || ''
                        }`}
                      />
                    </div>
                    <div className={`${classes.transaksiTruk} ${props.classes?.transaksiTruk || ''}`}>
                      Transaksi Truk
                    </div>
                  </div>
                  <div className={`${classes.frame36541} ${props.classes?.frame36541 || ''}`}>
                    <div className={`${classes.frame64332} ${props.classes?.frame64332 || ''}`}>
                      <div className={`${classes.head7} ${props.classes?.head7 || ''}`}>
                        <div
                          className={`${classes.totalJumlahKontainer2} ${props.classes?.totalJumlahKontainer2 || ''}`}
                        >
                          Total Jumlah Kontainer
                        </div>
                      </div>
                      <div className={`${classes.unnamed8} ${props.classes?.unnamed8 || ''}`}>0</div>
                    </div>
                    <div className={`${classes.frame6434} ${props.classes?.frame6434 || ''}`}>
                      <div className={`${classes.head8} ${props.classes?.head8 || ''}`}>
                        <div
                          className={`${classes.totalJumlahTransaksi2} ${props.classes?.totalJumlahTransaksi2 || ''}`}
                        >
                          Total Jumlah Transaksi
                        </div>
                      </div>
                      <div className={`${classes.unnamed9} ${props.classes?.unnamed9 || ''}`}>0</div>
                    </div>
                    <div className={`${classes.frame64333} ${props.classes?.frame64333 || ''}`}>
                      <div className={`${classes.head9} ${props.classes?.head9 || ''}`}>
                        <div className={`${classes.totalNilaiTransaksi2} ${props.classes?.totalNilaiTransaksi2 || ''}`}>
                          Total Nilai Transaksi
                        </div>
                      </div>
                      <div className={`${classes.rp04} ${props.classes?.rp04 || ''}`}>Rp0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes.sectionBottom2} ${props.classes?.sectionBottom2 || ''}`}>
                <div className={`${classes.card6} ${props.classes?.card6 || ''}`}>
                  <div className={`${classes.icon6} ${props.classes?.icon6 || ''}`}>
                    <Logo40x402 />
                  </div>
                  <div className={`${classes.head10} ${props.classes?.head10 || ''}`}>
                    <div className={`${classes.transaksiPaylater2} ${props.classes?.transaksiPaylater2 || ''}`}>
                      Transaksi Paylater
                    </div>
                  </div>
                  <div className={`${classes.rp05} ${props.classes?.rp05 || ''}`}>Rp0</div>
                  <div className={`${classes.info7} ${props.classes?.info7 || ''}`}>
                    <div className={`${classes.unnamed10} ${props.classes?.unnamed10 || ''}`}>0</div>
                    <div className={`${classes.transaksi4} ${props.classes?.transaksi4 || ''}`}>Transaksi</div>
                  </div>
                </div>
                <div className={`${classes.card7} ${props.classes?.card7 || ''}`}>
                  <div className={`${classes.icon7} ${props.classes?.icon7 || ''}`}>
                    <RemixIconsFillDocumentBillFill2
                      className={`${classes.remixIconsFillDocumentBillFill2} ${
                        props.classes?.remixIconsFillDocumentBillFill2 || ''
                      }`}
                    />
                  </div>
                  <div className={`${classes.head11} ${props.classes?.head11 || ''}`}>
                    <div
                      className={`${classes.transaksiInvoiceAcceptance} ${
                        props.classes?.transaksiInvoiceAcceptance || ''
                      }`}
                    >
                      Transaksi Invoice Acceptance
                    </div>
                  </div>
                  <div className={`${classes.rp06} ${props.classes?.rp06 || ''}`}>Rp0</div>
                  <div className={`${classes.info8} ${props.classes?.info8 || ''}`}>
                    <div className={`${classes.unnamed11} ${props.classes?.unnamed11 || ''}`}>0 </div>
                    <div className={`${classes.transaksi5} ${props.classes?.transaksi5 || ''}`}>Transaksi</div>
                  </div>
                </div>
                <div className={`${classes.card8} ${props.classes?.card8 || ''}`}>
                  <div className={`${classes.icon8} ${props.classes?.icon8 || ''}`}>
                    <RemixIconsFillFinanceBankCardF
                      className={`${classes.remixIconsFillFinanceBankCardF} ${
                        props.classes?.remixIconsFillFinanceBankCardF || ''
                      }`}
                    />
                  </div>
                  <div className={`${classes.head12} ${props.classes?.head12 || ''}`}>
                    <div className={`${classes.transaksiKartuKredit} ${props.classes?.transaksiKartuKredit || ''}`}>
                      Transaksi Kartu Kredit
                    </div>
                  </div>
                  <div className={`${classes.rp07} ${props.classes?.rp07 || ''}`}>Rp0</div>
                  <div className={`${classes.info9} ${props.classes?.info9 || ''}`}>
                    <div className={`${classes.unnamed12} ${props.classes?.unnamed12 || ''}`}>0 </div>
                    <div className={`${classes.transaksi6} ${props.classes?.transaksi6 || ''}`}>Transaksi</div>
                  </div>
                </div>
                <div className={`${classes.card9} ${props.classes?.card9 || ''}`}>
                  <div className={`${classes.icon9} ${props.classes?.icon9 || ''}`}>
                    <RemixIconsFillFinanceExchangeF
                      className={`${classes.remixIconsFillFinanceExchangeF} ${
                        props.classes?.remixIconsFillFinanceExchangeF || ''
                      }`}
                    />
                  </div>
                  <div className={`${classes.head13} ${props.classes?.head13 || ''}`}>
                    <div className={`${classes.transaksiInternalB2B} ${props.classes?.transaksiInternalB2B || ''}`}>
                      Transaksi Internal B2B
                    </div>
                  </div>
                  <div className={`${classes.rp08} ${props.classes?.rp08 || ''}`}>Rp0</div>
                  <div className={`${classes.info10} ${props.classes?.info10 || ''}`}>
                    <div className={`${classes.unnamed13} ${props.classes?.unnamed13 || ''}`}>0</div>
                    <div className={`${classes.transaksi7} ${props.classes?.transaksi7 || ''}`}>Transaksi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.blockRingkasan} ${props.classes?.blockRingkasan || ''}`}>
            <div className={`${classes.header2} ${props.classes?.header2 || ''}`}>
              <div className={`${classes._1} ${props.classes?._1 || ''}`}>
                <div className={`${classes.ringkasanLaporan} ${props.classes?.ringkasanLaporan || ''}`}>
                  Ringkasan Laporan
                </div>
              </div>
              <div className={`${classes._2} ${props.classes?._2 || ''}`}>
                <div className={`${classes.inputTextActivatedIcon} ${props.classes?.inputTextActivatedIcon || ''}`}>
                  <div className={`${classes.inputBorder} ${props.classes?.inputBorder || ''}`}></div>
                  <div className={`${classes.buttonBorder} ${props.classes?.buttonBorder || ''}`}></div>
                  <IconsActionsExpand_moreIcon
                    className={`${classes.iconsActionsExpand_more} ${props.classes?.iconsActionsExpand_more || ''}`}
                  />
                  <div className={`${classes.inputTextField} ${props.classes?.inputTextField || ''}`}>Pilih TPK</div>
                </div>
              </div>
            </div>
            <div className={`${classes.sectionFlex} ${props.classes?.sectionFlex || ''}`}>
              <div className={`${classes.card10} ${props.classes?.card10 || ''}`}>
                <div className={`${classes.header3} ${props.classes?.header3 || ''}`}>
                  <div className={`${classes._12} ${props.classes?._12 || ''}`}>
                    <div className={`${classes.proformaKontainer} ${props.classes?.proformaKontainer || ''}`}>
                      Proforma &amp; Kontainer
                    </div>
                  </div>
                  <div className={`${classes._22} ${props.classes?._22 || ''}`}>
                    <div
                      className={`${classes.inputTextActivatedIcon2} ${props.classes?.inputTextActivatedIcon2 || ''}`}
                    >
                      <div className={`${classes.inputBorder2} ${props.classes?.inputBorder2 || ''}`}></div>
                      <div className={`${classes.buttonBorder2} ${props.classes?.buttonBorder2 || ''}`}></div>
                      <IconsActionsExpand_moreIcon2
                        className={`${classes.iconsActionsExpand_more2} ${
                          props.classes?.iconsActionsExpand_more2 || ''
                        }`}
                      />
                      <div className={`${classes.inputTextField2} ${props.classes?.inputTextField2 || ''}`}>
                        Pilih Periode
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${classes.select} ${props.classes?.select || ''}`}>
                  <Chevron_leftIcon className={`${classes.chevron_left} ${props.classes?.chevron_left || ''}`} />
                  <div className={`${classes._2022} ${props.classes?._2022 || ''}`}>2022</div>
                  <Chevron_rightIcon className={`${classes.chevron_right} ${props.classes?.chevron_right || ''}`} />
                </div>
                <div className={`${classes.info11} ${props.classes?.info11 || ''}`}>
                  <div className={`${classes.infoNoData} ${props.classes?.infoNoData || ''}`}>
                    <div className={`${classes.belumAdaData} ${props.classes?.belumAdaData || ''}`}>Belum ada data</div>
                  </div>
                </div>
              </div>
              <div className={`${classes.card11} ${props.classes?.card11 || ''}`}>
                <div className={`${classes.header4} ${props.classes?.header4 || ''}`}>
                  <div className={`${classes._13} ${props.classes?._13 || ''}`}>
                    <div className={`${classes.imporEkspor} ${props.classes?.imporEkspor || ''}`}>
                      Impor &amp; Ekspor
                    </div>
                  </div>
                  <div className={`${classes._23} ${props.classes?._23 || ''}`}>
                    <div
                      className={`${classes.inputTextActivatedIcon3} ${props.classes?.inputTextActivatedIcon3 || ''}`}
                    >
                      <div className={`${classes.inputBorder3} ${props.classes?.inputBorder3 || ''}`}></div>
                      <div className={`${classes.buttonBorder3} ${props.classes?.buttonBorder3 || ''}`}></div>
                      <IconsActionsExpand_moreIcon3
                        className={`${classes.iconsActionsExpand_more3} ${
                          props.classes?.iconsActionsExpand_more3 || ''
                        }`}
                      />
                      <div className={`${classes.inputTextField3} ${props.classes?.inputTextField3 || ''}`}>
                        Pilih Periode
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${classes.select2} ${props.classes?.select2 || ''}`}>
                  <Chevron_leftIcon2 className={`${classes.chevron_left2} ${props.classes?.chevron_left2 || ''}`} />
                  <div className={`${classes._20222} ${props.classes?._20222 || ''}`}>2022</div>
                  <Chevron_rightIcon2 className={`${classes.chevron_right2} ${props.classes?.chevron_right2 || ''}`} />
                </div>
                <div className={`${classes.info12} ${props.classes?.info12 || ''}`}>
                  <div className={`${classes.infoNoData2} ${props.classes?.infoNoData2 || ''}`}>
                    <div className={`${classes.belumAdaData2} ${props.classes?.belumAdaData2 || ''}`}>
                      Belum ada data
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.sectionFlex2} ${props.classes?.sectionFlex2 || ''}`}>
              <div className={`${classes.card12} ${props.classes?.card12 || ''}`}>
                <div className={`${classes.header5} ${props.classes?.header5 || ''}`}>
                  <div className={`${classes._14} ${props.classes?._14 || ''}`}>
                    <div className={`${classes.proformaKontainer2} ${props.classes?.proformaKontainer2 || ''}`}>
                      Proforma &amp; Kontainer
                    </div>
                  </div>
                  <div className={`${classes._24} ${props.classes?._24 || ''}`}>
                    <div
                      className={`${classes.inputTextActivatedIcon4} ${props.classes?.inputTextActivatedIcon4 || ''}`}
                    >
                      <div className={`${classes.inputBorder4} ${props.classes?.inputBorder4 || ''}`}></div>
                      <div className={`${classes.buttonBorder4} ${props.classes?.buttonBorder4 || ''}`}></div>
                      <IconsActionsExpand_moreIcon4
                        className={`${classes.iconsActionsExpand_more4} ${
                          props.classes?.iconsActionsExpand_more4 || ''
                        }`}
                      />
                      <div className={`${classes.inputTextField4} ${props.classes?.inputTextField4 || ''}`}>
                        Pilih Periode
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${classes.select3} ${props.classes?.select3 || ''}`}>
                  <Chevron_leftIcon3 className={`${classes.chevron_left3} ${props.classes?.chevron_left3 || ''}`} />
                  <div className={`${classes._20223} ${props.classes?._20223 || ''}`}>2022</div>
                  <Chevron_rightIcon3 className={`${classes.chevron_right3} ${props.classes?.chevron_right3 || ''}`} />
                </div>
                <div className={`${classes.info13} ${props.classes?.info13 || ''}`}>
                  <div className={`${classes.infoNoData3} ${props.classes?.infoNoData3 || ''}`}>
                    <div className={`${classes.belumAdaData3} ${props.classes?.belumAdaData3 || ''}`}>
                      Belum ada data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.blockAktivitas} ${props.classes?.blockAktivitas || ''}`}>
            <div className={`${classes.header6} ${props.classes?.header6 || ''}`}>
              <div className={`${classes._15} ${props.classes?._15 || ''}`}>
                <div className={`${classes.laporanAktivitasHariIni} ${props.classes?.laporanAktivitasHariIni || ''}`}>
                  Laporan Aktivitas Hari Ini
                </div>
              </div>
              <div className={`${classes._25} ${props.classes?._25 || ''}`}></div>
            </div>
            <div className={`${classes.card13} ${props.classes?.card13 || ''}`}>
              <div className={`${classes.alert} ${props.classes?.alert || ''}`}>
                <div className={`${classes.title3} ${props.classes?.title3 || ''}`}>
                  <CalendarIcon className={`${classes.calendar} ${props.classes?.calendar || ''}`} />
                  <div
                    className={`${classes.periodeLaporan5April202200240W} ${
                      props.classes?.periodeLaporan5April202200240W || ''
                    }`}
                  >
                    Periode laporan : 05 April 2022 • 00:00 - 24:00 WIB
                  </div>
                </div>
                <div className={`${classes.info14} ${props.classes?.info14 || ''}`}>
                  Pembaruan terakhir : 21 Mei 2021 09:00 WIB
                </div>
              </div>
              <div className={`${classes.sectionTop3} ${props.classes?.sectionTop3 || ''}`}>
                <div className={`${classes.card14} ${props.classes?.card14 || ''}`}>
                  <div className={`${classes.title4} ${props.classes?.title4 || ''}`}>
                    <div className={`${classes.pesananTruk} ${props.classes?.pesananTruk || ''}`}>Pesanan Truk</div>
                    <div
                      className={`${classes.pantauPerkembanganSemuaAktivit} ${
                        props.classes?.pantauPerkembanganSemuaAktivit || ''
                      }`}
                    >
                      Pantau perkembangan semua aktivitas pesanan truk.
                    </div>
                  </div>
                  <div className={`${classes.detail} ${props.classes?.detail || ''}`}>
                    <div className={`${classes.title5} ${props.classes?.title5 || ''}`}>
                      <div className={`${classes.unnamed14} ${props.classes?.unnamed14 || ''}`}>0</div>
                      <div className={`${classes.totalPesanan} ${props.classes?.totalPesanan || ''}`}>
                        Total Pesanan
                      </div>
                    </div>
                    <div className={`${classes.content3} ${props.classes?.content3 || ''}`}>
                      <div className={`${classes.list} ${props.classes?.list || ''}`}>
                        <div className={`${classes.info15} ${props.classes?.info15 || ''}`}>
                          <Ellipse314Icon className={`${classes.ellipse314} ${props.classes?.ellipse314 || ''}`} />
                          <div className={`${classes.menungguKonfirmasi} ${props.classes?.menungguKonfirmasi || ''}`}>
                            Menunggu Konfirmasi
                          </div>
                        </div>
                        <div className={`${classes.info16} ${props.classes?.info16 || ''}`}>
                          <Ellipse315Icon className={`${classes.ellipse315} ${props.classes?.ellipse315 || ''}`} />
                          <div
                            className={`${classes.pesananTerkonfirmasi} ${props.classes?.pesananTerkonfirmasi || ''}`}
                          >
                            Pesanan terkonfirmasi
                          </div>
                        </div>
                        <div className={`${classes.info17} ${props.classes?.info17 || ''}`}>
                          <Ellipse316Icon className={`${classes.ellipse316} ${props.classes?.ellipse316 || ''}`} />
                          <div className={`${classes.dalamPerjalanan} ${props.classes?.dalamPerjalanan || ''}`}>
                            Dalam Perjalanan
                          </div>
                        </div>
                        <div className={`${classes.info18} ${props.classes?.info18 || ''}`}>
                          <Ellipse317Icon className={`${classes.ellipse317} ${props.classes?.ellipse317 || ''}`} />
                          <div className={`${classes.selesai} ${props.classes?.selesai || ''}`}>Selesai</div>
                        </div>
                        <div className={`${classes.info19} ${props.classes?.info19 || ''}`}>
                          <Ellipse318Icon className={`${classes.ellipse318} ${props.classes?.ellipse318 || ''}`} />
                          <div className={`${classes.batal} ${props.classes?.batal || ''}`}>Batal</div>
                        </div>
                      </div>
                      <div className={`${classes.unnamed15} ${props.classes?.unnamed15 || ''}`}>0</div>
                      <div className={`${classes.unnamed16} ${props.classes?.unnamed16 || ''}`}>0</div>
                      <div className={`${classes.unnamed17} ${props.classes?.unnamed17 || ''}`}>0</div>
                      <div className={`${classes.unnamed18} ${props.classes?.unnamed18 || ''}`}>0</div>
                      <div className={`${classes.unnamed19} ${props.classes?.unnamed19 || ''}`}>0</div>
                    </div>
                  </div>
                </div>
                <_2Icon className={`${classes._26} ${props.classes?._26 || ''}`} />
              </div>
              <div className={`${classes.sectionBottom3} ${props.classes?.sectionBottom3 || ''}`}>
                <div className={`${classes.title6} ${props.classes?.title6 || ''}`}>
                  <div className={`${classes.proformaHariIni} ${props.classes?.proformaHariIni || ''}`}>
                    Proforma Hari Ini
                  </div>
                  <div
                    className={`${classes.lihatInformasiTerkiniDariProfo} ${
                      props.classes?.lihatInformasiTerkiniDariProfo || ''
                    }`}
                  >
                    Lihat informasi terkini dari proforma <br />
                    berdasarkan status pembayaran.{' '}
                  </div>
                </div>
                <div className={`${classes.detail2} ${props.classes?.detail2 || ''}`}>
                  <div className={`${classes.info20} ${props.classes?.info20 || ''}`}>
                    <div className={`${classes.title7} ${props.classes?.title7 || ''}`}>
                      <div className={`${classes.telahDibayar} ${props.classes?.telahDibayar || ''}`}>
                        Telah Dibayar
                      </div>
                      <InformationIcon className={`${classes.information} ${props.classes?.information || ''}`} />
                    </div>
                    <div className={`${classes.rp09} ${props.classes?.rp09 || ''}`}>Rp0</div>
                  </div>
                  <div className={`${classes.info21} ${props.classes?.info21 || ''}`}>
                    <div className={`${classes.title8} ${props.classes?.title8 || ''}`}>
                      <div className={`${classes.belumDibayar} ${props.classes?.belumDibayar || ''}`}>
                        Belum Dibayar
                      </div>
                      <InformationIcon2 className={`${classes.information2} ${props.classes?.information2 || ''}`} />
                    </div>
                    <div className={`${classes.rp010} ${props.classes?.rp010 || ''}`}>Rp0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.blockTransaksi2} ${props.classes?.blockTransaksi2 || ''}`}>
            <div className={`${classes.card15} ${props.classes?.card15 || ''}`}>
              <div className={`${classes.header7} ${props.classes?.header7 || ''}`}>
                <div className={`${classes.title9} ${props.classes?.title9 || ''}`}>
                  <div
                    className={`${classes.nilaiTransaksiConsigneeTerbesa} ${
                      props.classes?.nilaiTransaksiConsigneeTerbesa || ''
                    }`}
                  >
                    Nilai Transaksi Consignee Terbesar
                  </div>
                </div>
                <div className={`${classes.background} ${props.classes?.background || ''}`}></div>
              </div>
              <div className={`${classes.content4} ${props.classes?.content4 || ''}`}>
                <div className={`${classes.text7} ${props.classes?.text7 || ''}`}>
                  <div className={`${classes.belumAdaTransaksi} ${props.classes?.belumAdaTransaksi || ''}`}>
                    Belum ada transaksi
                  </div>
                  <div
                    className={`${classes.laporanProformaAkanDitampilkan} ${
                      props.classes?.laporanProformaAkanDitampilkan || ''
                    }`}
                  >
                    Laporan proforma akan ditampilkan di sini jika sudah ada transaksi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.blockLaporan} ${props.classes?.blockLaporan || ''}`}>
            <div className={`${classes.header8} ${props.classes?.header8 || ''}`}>
              <div className={`${classes.title10} ${props.classes?.title10 || ''}`}>
                <div
                  className={`${classes.nilaiTransaksiConsigneeTerbesa2} ${
                    props.classes?.nilaiTransaksiConsigneeTerbesa2 || ''
                  }`}
                >
                  Nilai Transaksi Consignee Terbesar
                </div>
                <div className={`${classes.tabs} ${props.classes?.tabs || ''}`}>
                  <AttributTab />
                  <AttributTab2 />
                  <AttributTab3 />
                </div>
              </div>
              <div className={`${classes.background2} ${props.classes?.background2 || ''}`}></div>
            </div>
            <div className={`${classes.card16} ${props.classes?.card16 || ''}`}>
              <div className={`${classes.alert2} ${props.classes?.alert2 || ''}`}>
                <div className={`${classes.frame36486} ${props.classes?.frame36486 || ''}`}>
                  <CalendarIcon2 className={`${classes.calendar2} ${props.classes?.calendar2 || ''}`} />
                  <div className={`${classes.periodeLaporan2021} ${props.classes?.periodeLaporan2021 || ''}`}>
                    Periode laporan :2021
                  </div>
                </div>
                <div
                  className={`${classes.pembaruanTerakhir21Mei202190WI} ${
                    props.classes?.pembaruanTerakhir21Mei202190WI || ''
                  }`}
                >
                  Pembaruan terakhir : 21 Mei 2021 09:00 WIB
                </div>
              </div>
              <div className={`${classes.collapse} ${props.classes?.collapse || ''}`}>
                <div className={`${classes.section} ${props.classes?.section || ''}`}>
                  <div className={`${classes.header9} ${props.classes?.header9 || ''}`}>
                    <div className={`${classes.info22} ${props.classes?.info22 || ''}`}>
                      <div className={`${classes.totalNilaiTransaksi3} ${props.classes?.totalNilaiTransaksi3 || ''}`}>
                        Total nilai transaksi
                      </div>
                      <div
                        className={`${classes.akumulasiSeluruhTransaksiYangB} ${
                          props.classes?.akumulasiSeluruhTransaksiYangB || ''
                        }`}
                      >
                        Akumulasi seluruh transaksi yang berhasil dilakukan dalam periode waktu yang dipilih.
                      </div>
                    </div>
                    <Chevron_downIcon className={`${classes.chevron_down} ${props.classes?.chevron_down || ''}`} />
                  </div>
                  <div className={`${classes.content5} ${props.classes?.content5 || ''}`}>
                    <div className={`${classes.text8} ${props.classes?.text8 || ''}`}>
                      <div className={`${classes.total} ${props.classes?.total || ''}`}>Total</div>
                      <div className={`${classes.rp011} ${props.classes?.rp011 || ''}`}>Rp0</div>
                    </div>
                  </div>
                </div>
                <div className={`${classes.section2} ${props.classes?.section2 || ''}`}>
                  <div className={`${classes.header10} ${props.classes?.header10 || ''}`}>
                    <div className={`${classes.info23} ${props.classes?.info23 || ''}`}>
                      <div className={`${classes.jumlahTransaksi} ${props.classes?.jumlahTransaksi || ''}`}>
                        jumlah transaksi
                      </div>
                      <div
                        className={`${classes.totalNilaiTransaksiMelaluiSemu} ${
                          props.classes?.totalNilaiTransaksiMelaluiSemu || ''
                        }`}
                      >
                        Total nilai transaksi melalui semua metode pembayaran pada periode waktu yang dipilih.
                      </div>
                    </div>
                    <Chevron_downIcon2 className={`${classes.chevron_down2} ${props.classes?.chevron_down2 || ''}`} />
                  </div>
                  <div className={`${classes.content6} ${props.classes?.content6 || ''}`}>
                    <div className={`${classes.text9} ${props.classes?.text9 || ''}`}>
                      <div className={`${classes.total2} ${props.classes?.total2 || ''}`}>Total</div>
                      <div className={`${classes.rp012} ${props.classes?.rp012 || ''}`}>Rp0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.logeePort2022} ${props.classes?.logeePort2022 || ''}`}>Logee Port ©2022</div>
        </div>
      </div>
    </div>
  );
});
