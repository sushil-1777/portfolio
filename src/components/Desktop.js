import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const Desktop = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-darkslategray-100 max-w-full flex flex-col items-start justify-start pt-[66px] pb-[17px] pr-[91px] pl-[119px] box-border gap-[29px] leading-[normal] tracking-[normal] text-left text-5xl text-white font-inter mq1300:pl-[59px] mq1300:pr-[45px] mq1300:box-border mq800:pl-[29px] mq800:pr-[22px] mq800:box-border ${className}`}
    >
      <section className="ml-[-285px] mb-3 w-[1755px] h-[1422px] flex flex-col items-end justify-start pt-7 px-[278px] pb-[1362px] box-border relative gap-[115px] max-w-[143%] shrink-0 text-left text-[23px] text-white font-marmelad mq450:gap-[29px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:h-auto mq1300:pt-5 mq1300:px-[139px] mq1300:pb-[575px] mq1300:box-border mq800:gap-[57px] mq800:pl-[69px] mq800:pr-[69px] mq800:pb-[374px] mq800:box-border">
        <div className="w-[579px] h-[612px] absolute !m-[0] top-[0px] right-[0px] [filter:blur(213px)] rounded-[50%] bg-darkturquoise" />
        <div className="w-[848px] h-[837px] absolute !m-[0] bottom-[145px] left-[0px] [filter:blur(213px)] rounded-[50%] bg-darkslateblue" />
        <div className="w-[1088px] flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1]">
            <a className="[text-decoration:none] relative text-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[91px] whitespace-nowrap mq450:text-lg">
              Sushil C.
            </a>
            <div className="w-[521px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-lg text-darkgray font-inter mq800:w-0">
              <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq800:hidden">
                <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[53px]">
                    About
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[73px]">
                    Creative
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[96px]">
                    Experience
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[69px]">
                    Contact
                  </a>
                </div>
                <img
                  className="h-[23px] w-[23px] relative object-cover min-h-[23px]"
                  loading="lazy"
                  alt=""
                  src="/youtube-1-1@2x.png"
                />
                <div className="flex flex-row items-start justify-start gap-[22px]">
                  <img
                    className="h-[23px] w-[23px] relative object-cover min-h-[23px]"
                    loading="lazy"
                    alt=""
                    src="/linkedin-1@2x.png"
                  />
                  <img
                    className="h-[23px] w-[23px] relative object-cover min-h-[23px]"
                    loading="lazy"
                    alt=""
                    src="/github-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1181px] flex flex-col items-end justify-start gap-[59px] max-w-full shrink-0 text-[64px] font-inter mq800:gap-[29px]">
          <div className="w-[1088px] flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[109px] max-w-full mq1125:gap-[54px] mq1300:flex-wrap mq800:gap-[27px]">
              <div className="flex flex-col items-start justify-start pt-40 px-0 pb-0 box-border min-w-[389px] max-w-full mq1300:flex-1 mq1300:min-w-full mq800:pt-[104px] mq800:box-border">
                <h1 className="m-0 relative text-inherit font-extrabold font-inherit z-[1] mq450:text-[38px] mq800:text-[51px]">
                  <p className="m-0">I'm Sushil.</p>
                  <p className="m-0">Designer.</p>
                  <p className="m-0">Developer.</p>
                  <p className="m-0">Contributor.</p>
                </h1>
              </div>
              <img
                className="h-[817px] flex-1 relative rounded-[20px] max-w-full overflow-hidden object-cover min-w-[374px] z-[1] mq1300:min-w-full"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[49px] max-w-full text-5xl mq800:gap-[24px]">
            <div className="self-stretch h-[3px] flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
              <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[3px] border-solid border-darkgray" />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full mq800:gap-[16px]">
              <div className="w-[1161px] flex flex-row items-start justify-start gap-[77px] max-w-full mq1300:flex-wrap mq1300:gap-[38px] mq800:gap-[19px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[28px] min-w-[484px] max-w-full mq1300:min-w-full mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[29px]">
                      <img
                        className="w-10 h-10 relative object-cover z-[1]"
                        alt=""
                        src="/worldwideweb-1@2x.png"
                      />
                      <img
                        className="w-10 h-10 relative object-cover z-[1]"
                        alt=""
                        src="/interface-1@2x.png"
                      />
                      <img
                        className="w-10 h-[41px] relative object-cover z-[1]"
                        alt=""
                        src="/appdevelopment-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[86px] min-w-[440px] max-w-full mq450:gap-[21px] mq1300:min-w-full mq800:gap-[43px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq800:gap-[17px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq800:flex-wrap">
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border min-w-[218px] mq800:flex-1">
                            <div className="flex flex-col items-start justify-start gap-[40px]">
                              <div className="relative font-extrabold z-[1] mq450:text-lgi">
                                Web Development
                              </div>
                              <b className="relative font-extrabold z-[1] mq450:text-lgi">
                                UI/UX Design
                              </b>
                            </div>
                          </div>
                          <div className="w-[333px] flex flex-col items-start justify-start gap-[35px] min-w-[333px] max-w-full mq450:gap-[17px] mq800:flex-1">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
                              <img
                                className="h-10 w-10 relative object-cover min-h-[40px] z-[1]"
                                alt=""
                                src="/administrator-1@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[177px]">
                                <b className="relative font-extrabold z-[1] mq450:text-lgi">
                                  System Administration
                                </b>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[20px]">
                              <img
                                className="h-[41px] w-10 relative object-cover z-[1]"
                                alt=""
                                src="/softwareengineer-1@2x.png"
                              />
                              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                                <div className="relative font-extrabold z-[1] mq450:text-lgi">
                                  Network Engineer
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[444px] relative font-extrabold inline-block max-w-full z-[1] mq450:text-lgi">
                        Cross Platform App Development
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-[58px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="w-[310px] flex flex-row items-start justify-start relative">
                        <div className="flex-1 relative leading-[21px] font-extrabold mq450:text-lgi mq450:leading-[17px]">
                          And Community Helper
                        </div>
                        <img
                          className="h-10 w-10 absolute !m-[0] right-[-28px] bottom-[-19px] object-cover z-[1]"
                          alt=""
                          src="/community-1-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[339px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[339px] max-w-full mq1300:flex-1 mq1300:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[13px] mq450:flex-wrap">
                      <img
                        className="h-10 w-10 relative object-cover"
                        alt=""
                        src="/coding-1@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[186px]">
                        <b className="relative font-extrabold mq450:text-lgi">
                          Full-Stack Development
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative object-cover"
                        alt=""
                        src="/contentcreator-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <div className="relative font-extrabold mq450:text-lgi">
                          Content Curator
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border max-w-full">
                <img
                  className="flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/line-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1191px] flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full text-left text-5xl text-white font-inter">
        <div className="h-[632px] flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[52px] box-border gap-[24px] max-w-full mq800:h-auto mq800:pb-[34px] mq800:box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[9px] max-w-full shrink-0">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[11px] pb-[7.7px] box-border max-w-full">
              <div className="w-[451px] flex flex-col items-end justify-start gap-[12.3px] max-w-full">
                <div className="flex flex-row items-start justify-end py-0 px-[15px] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq800:flex-wrap">
                    <img
                      className="h-10 w-10 relative object-cover min-h-[40px]"
                      alt=""
                      src="/technology-1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full">
                      <div className="relative font-extrabold mq450:text-lgi">
                        Tools and Technologies I use
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[3px] relative box-border border-t-[3px] border-solid border-white" />
              </div>
            </div>
            <div className="w-[1180px] flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[5px] box-border gap-[28px] max-w-full">
              <div className="h-[52px] w-[236px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-24@2x.png"
                />
              </div>
              <div className="h-14 w-44 flex flex-col items-start justify-start pt-0.5 pb-0 pr-[15px] pl-0 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="h-[52px] w-[216px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
              <div className="w-[186px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[47px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-22@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[165px]">
                <img
                  className="self-stretch h-[51px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[17px] max-w-full mq1300:flex-wrap">
              <div className="w-[163px] flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0 box-border">
                <img
                  className="self-stretch h-[46px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
              <div className="w-[132px] flex flex-col items-start justify-start pt-[3px] pb-0 pr-[11px] pl-0 box-border">
                <img
                  className="self-stretch h-11 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-10@2x.png"
                />
              </div>
              <div className="w-[191px] flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0 box-border">
                <img
                  className="self-stretch h-[45px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
              <div className="w-[170px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <img
                  className="self-stretch h-[46px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
              <img
                className="h-11 w-[229px] relative rounded-3xs object-cover"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="h-[50px] w-[210px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-end justify-center pt-0 px-0 pb-[11px] box-border gap-[39px] max-w-full mq1300:flex-wrap mq800:gap-[19px]">
              <div className="flex flex-row items-start justify-center gap-[25px] max-w-full mq800:flex-wrap">
                <img
                  className="self-stretch w-[271px] relative rounded-3xs max-h-full object-cover min-h-[46px]"
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
                <img
                  className="self-stretch w-[204px] relative rounded-3xs max-h-full object-cover min-h-[46px]"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <img
                className="h-[46px] w-[157px] relative rounded-3xs object-cover"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <img
                  className="self-stretch w-[184px] relative rounded-3xs max-h-full object-cover min-h-[57px]"
                  loading="lazy"
                  alt=""
                  src="/image-23@2x.png"
                />
                <img
                  className="self-stretch w-[248px] relative rounded-3xs max-h-full object-cover min-h-[57px]"
                  loading="lazy"
                  alt=""
                  src="/image-16@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-center pt-0 px-0 pb-1 box-border gap-[30.3px] max-w-full mq800:gap-[15px]">
              <div className="flex flex-row items-end justify-center gap-[11px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[52px] w-[200px] relative rounded-3xs object-cover"
                  alt=""
                  src="/image-14@2x.png"
                />
                <img
                  className="h-[47px] w-[115px] relative rounded-3xs object-cover"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
              <img
                className="h-[46px] w-[123px] relative rounded-3xs object-cover"
                alt=""
                src="/image-25@2x.png"
              />
              <img
                className="h-[45px] w-[281px] relative rounded-3xs object-cover"
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
              <div className="flex-1 flex flex-row items-end justify-start gap-[21px] min-w-[240px] max-w-full mq450:flex-wrap">
                <img
                  className="h-[55px] w-[122px] relative rounded-3xs object-cover"
                  alt=""
                  src="/image-27@2x.png"
                />
                <img
                  className="h-12 w-[227px] relative rounded-3xs object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-19@2x.png"
                />
              </div>
            </div>
            <div className="w-[1180px] flex flex-row items-end justify-center py-0 pr-1 pl-0 box-border gap-[21px] max-w-full mq1125:flex-wrap">
              <img
                className="h-[34px] w-[115px] relative rounded-3xs object-cover"
                alt=""
                src="/image-28@2x.png"
              />
              <div className="flex-[0.9103] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border min-w-[101px] mq450:flex-1">
                <img
                  className="self-stretch h-8 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-29@2x.png"
                />
              </div>
              <img
                className="h-8 flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[101px]"
                alt=""
                src="/image-31@2x.png"
              />
              <div className="w-[152px] flex flex-col items-start justify-end pt-0 pb-px pr-3.5 pl-0 box-border">
                <img
                  className="self-stretch h-10 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-32@2x.png"
                />
              </div>
              <div className="flex-[0.9264] flex flex-col items-start justify-end pt-0 pb-px pr-3 pl-0 box-border min-w-[106px] mq450:flex-1">
                <img
                  className="self-stretch h-10 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-30@2x.png"
                />
              </div>
              <img
                className="h-8 w-[150px] relative rounded-3xs object-cover"
                alt=""
                src="/image-36@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[103px] min-h-[41px]"
                alt=""
                src="/image-33@2x.png"
              />
            </div>
          </div>
          <div className="w-[1180px] flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[21px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[19px]">
                <div className="w-[157px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                  <img
                    className="self-stretch h-[35px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-35@2x.png"
                  />
                </div>
                <div className="w-[134px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-[5px] pl-0 box-border">
                  <img
                    className="self-stretch h-7 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-37@2x.png"
                  />
                </div>
                <div className="w-[158px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                  <img
                    className="self-stretch h-9 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-38@2x.png"
                  />
                </div>
                <img
                  className="h-[42px] w-[151px] relative rounded-3xs object-cover"
                  alt=""
                  src="/image-39@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border min-w-[146px]">
                  <img
                    className="self-stretch h-[47px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-40@2x.png"
                  />
                </div>
                <div className="w-[168px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-[9px] pl-0 box-border">
                  <img
                    className="self-stretch h-[42px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className="w-[74px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-[41px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-43@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-[3px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[19px] max-w-full">
                  <div className="w-[105px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                    <img
                      className="self-stretch h-9 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-46@2x.png"
                    />
                  </div>
                  <div className="w-[149px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                    <img
                      className="self-stretch h-10 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-47@2x.png"
                    />
                  </div>
                  <div className="w-[162px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                    <img
                      className="self-stretch h-[47px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-45@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border min-w-[120px]">
                    <img
                      className="self-stretch h-[37px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-49@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border min-w-[118px]">
                    <img
                      className="self-stretch h-[42px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-54@2x.png"
                    />
                  </div>
                  <img
                    className="h-[34px] w-[153px] relative rounded-3xs object-cover"
                    alt=""
                    src="/image-48@2x.png"
                  />
                  <img
                    className="h-[33px] w-[126px] relative rounded-3xs object-cover"
                    alt=""
                    src="/image-50@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 pr-0.5 pl-0 gap-[11px] mq1300:flex-wrap">
              <div className="w-[211px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch h-11 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-42@2x.png"
                />
              </div>
              <div className="w-[123px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[43px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-51@2x.png"
                />
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border">
                <img
                  className="self-stretch h-[42px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-44@2x.png"
                />
              </div>
              <img
                className="h-[46px] w-[246px] relative rounded-3xs object-cover"
                loading="lazy"
                alt=""
                src="/image-53@2x.png"
              />
              <div className="w-[166px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <img
                  className="self-stretch h-[46px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/image-52@2x.png"
                />
              </div>
              <img
                className="self-stretch w-[200px] relative rounded-3xs max-h-full object-cover min-h-[47px]"
                alt=""
                src="/image-55@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch h-[3px] relative box-border shrink-0 border-t-[3px] border-solid border-white" />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-left text-5xl text-white font-inter">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="w-[1185px] h-[316px] flex flex-col items-start justify-start pt-0 px-0 pb-[79px] box-border gap-[33px] max-w-full z-[5] mq450:pb-[51px] mq450:box-border mq800:h-auto mq800:gap-[16px]">
            <div className="w-[476px] flex flex-col items-end justify-start gap-[12px] max-w-full shrink-0">
              <div className="flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                  <img
                    className="h-10 w-10 relative object-cover min-h-[40px]"
                    alt=""
                    src="/bestcustomerexperience-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                    <div className="relative font-extrabold mq450:text-lgi">
                      My Experiences in this Industry
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[3px] relative box-border border-t-[3px] border-solid border-white" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[46px] pr-0 pl-[5px] box-border max-w-full text-lg">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px]">
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-[280px] overflow-hidden max-h-full object-cover min-w-[258px] min-h-[122px]"
                    loading="lazy"
                    alt=""
                    src="/image-56@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-[280px] overflow-hidden max-h-full object-cover min-w-[258px] min-h-[122px]"
                    loading="lazy"
                    alt=""
                    src="/image-57@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-[280px] overflow-hidden max-h-full object-cover min-w-[258px] min-h-[122px]"
                    loading="lazy"
                    alt=""
                    src="/image-58@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-3xs max-w-[280px] overflow-hidden max-h-full object-cover min-w-[258px] min-h-[122px]"
                    loading="lazy"
                    alt=""
                    src="/sblogo-1@2x.png"
                  />
                </div>
                <div className="w-[1125px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap mq1125:justify-center">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative font-extrabold">
                        Red Hat Enterprise Linux
                      </div>
                    </div>
                    <div className="w-[303px] flex flex-col items-start justify-start pt-1 pb-0 pr-5 pl-0 box-border">
                      <div className="relative font-extrabold">
                        Broadway Infosys Nepal
                      </div>
                    </div>
                    <div className="w-48 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                      <b className="relative font-extrabold inline-block min-w-[54px]">
                        Cisco
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <b className="relative font-extrabold inline-block min-w-[118px]">
                        SB Computer
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-px pl-[3px] box-border max-w-full shrink-0">
              <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-white" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start pt-[95px] pb-7 pr-[38px] pl-0 box-border relative gap-[60px] max-w-full mt-[-29px] mq800:gap-[30px] mq800:pb-5 mq800:box-border">
            <div className="w-[1168px] flex flex-row items-start justify-end py-0 px-[68px] box-border max-w-full mq1300:pl-[34px] mq1300:pr-[34px] mq1300:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[171px] max-w-full mq450:gap-[21px] mq1125:flex-wrap mq1125:gap-[85px] mq800:gap-[43px]">
                  <div className="w-[283px] relative inline-block min-w-[283px] max-h-[123px] [word-break:break-word] mq1125:flex-1">
                    <p className="m-0 font-extrabold">Get in Touch</p>
                    <p className="m-0 font-extrabold">&nbsp;</p>
                    <p className="m-0 text-lg">
                      Please contact me via this form Or you may use my email:
                    </p>
                    <p className="m-0 text-lg">sushilchaudhary1777@gmail.com</p>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[376px] max-w-full text-black mq1125:min-w-full">
                    <div className="self-stretch flex flex-row items-end justify-start max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                        <img
                          className="h-[553px] w-[683px] absolute !m-[0] top-[-264px] right-[-71px] rounded-3xs z-[2]"
                          alt=""
                          src="/rectangle-7.svg"
                        />
                        <img
                          className="h-[200px] flex-1 relative rounded-3xs max-w-full overflow-hidden z-[3]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[210px] box-border min-h-[433px] max-w-full ml-[-578px] mq450:pb-[136px] mq450:box-border">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
                          <div className="flex flex-row items-start justify-start py-0 px-2">
                            <b className="relative font-extrabold inline-block min-w-[83px] z-[3] mq450:text-lgi">
                              Name*
                            </b>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-lg text-white">
                            <div className="self-stretch flex flex-col items-end justify-start gap-[3px] max-w-full">
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full">
                                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                                  <div className="w-[210px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
                                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3">
                                        <div className="flex-1 flex flex-row items-start justify-start relative">
                                          <img
                                            className="h-10 w-[253px] absolute !m-[0] top-[calc(50%_-_20px)] right-[-35px] rounded-mini z-[3]"
                                            loading="lazy"
                                            alt=""
                                            src="/rectangle-1.svg"
                                          />
                                          <div className="flex-1 relative z-[4]">
                                            First Name
                                          </div>
                                        </div>
                                      </div>
                                      <b className="w-[148px] relative text-5xl font-extrabold text-black inline-block z-[3] mq450:text-lgi">
                                        Email*
                                      </b>
                                    </div>
                                  </div>
                                  <div className="w-[220px] flex flex-row items-start justify-start relative">
                                    <img
                                      className="h-10 w-[253px] absolute !m-[0] bottom-[-13px] left-[-26px] rounded-mini z-[3]"
                                      loading="lazy"
                                      alt=""
                                      src="/rectangle-1.svg"
                                    />
                                    <div className="flex-1 relative z-[4]">
                                      Last Name
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <TextField
                                className="[border:none] bg-[transparent] self-stretch h-10 relative z-[3]"
                                variant="outlined"
                                sx={{
                                  "& fieldset": { border: "none" },
                                  "& .MuiInputBase-root": {
                                    height: "40px",
                                    backgroundColor: "rgba(6, 56, 84, 0.7)",
                                    borderRadius: "15px",
                                  },
                                }}
                              />
                            </div>
                            <div className="w-[274px] flex flex-row items-start justify-start py-0 px-2 box-border text-5xl text-black">
                              <div className="flex-1 relative font-extrabold z-[3] mq450:text-lgi">
                                Message*
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[75px]">
                  <div className="flex flex-row items-start justify-start relative">
                    <div className="h-[50px] w-[180px] absolute !m-[0] right-[-50px] bottom-[-12px] rounded-mini bg-darkslategray-200 z-[3]" />
                    <div className="relative font-medium inline-block min-w-[81px] z-[4] mq450:text-lgi">
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[756px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] [filter:blur(213px)] rounded-[50%] bg-darkturquoise z-[1]" />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
          </div>
        </div>
      </section>
      <div className="w-[769px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="w-[317px] flex flex-col items-start justify-start gap-[34px] mq450:gap-[17px]">
              <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[39px]">
                <div className="relative mq450:text-[16px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px] font-extrabold whitespace-pre-wrap">
                    {" "}
                    FIND ME ON
                  </p>
                  <p className="m-0 text-[20px]">
                    Feel free to connect with me
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/facebook-1@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/instagram-1@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/social-1@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/github-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5px] text-[10px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-2.5 h-2.5 relative rounded-mini object-cover"
                loading="lazy"
                alt=""
                src="/copyright-1@2x.png"
              />
            </div>
            <div className="relative">
              2024 Designed and Developed by Sushil Chaudhary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
