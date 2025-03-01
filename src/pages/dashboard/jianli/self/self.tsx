import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Typography, Tag, Progress, Button } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, EnvironmentOutlined, PrinterOutlined } from '@ant-design/icons';
import { Description } from "./components/text";

const { Title, Text, Paragraph } = Typography;

// 全局主题颜色配置
const theme = {
  primaryGradient: 'linear-gradient(135deg, #6e8efb, #a777e3)',
  darkGradient: 'linear-gradient(135deg, #2c3e50, #4a69bd)',
  background: '#f8f9fa',
  text: '#2d3436',
  accent: '#6c5ce7',
  light: '#dfe6e9',
  softShadow: '0 10px 30px rgba(0,0,0,0.05)',
  strongShadow: '0 10px 20px rgba(0,0,0,0.1)',
  borderRadius: '12px',
};

// 创建全局样式组件
const GlobalPrintStyle = createGlobalStyle`
  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    body, html {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      background-color: white !important;
    }

    /* 必须确保简历容器在打印时可见 */
    .resume-container {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      position: relative !important;
      width: 210mm !important;
      margin: 0 auto !important;
      padding: 0 !important;
      box-shadow: none !important;
      overflow: visible !important;
      background-color: white !important;
    }

    /* 设置页面打印属性 */
    .resume-page {
      display: block !important;
      page-break-after: always !important;
      visibility: visible !important;
      opacity: 1 !important;
      width: 210mm !important;
      height: 297mm !important;
      margin: 0 !important;
      padding: 0 !important;
      background-color: white !important;
    }

    /* 确保内容可见 */
    .main-content, .skills-sidebar {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    /* 隐藏框架导航栏和其他非简历内容 */
    header, nav, footer, aside, .header-global, .navbar, .sidebar,
    .ant-layout-header, .ant-layout-sider, .ant-menu, .ant-pro-sider,
    .menu-container, .navigation-bar {
      display: none !important;
    }

    /* 隐藏打印按钮 */
    .print-button-container {
      display: none !important;
    }
  }
`;

// 简历容器
const ResumeContainer = styled.div`
  width: 210mm;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  position: relative;
  overflow: visible;

  @media print {
    width: 210mm !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    overflow: visible !important;
  }
`;

// 简历页面
const ResumePage = styled.div`
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  position: relative;
  page-break-after: always;

  @media print {
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    page-break-after: always !important;
    box-shadow: none !important;
  }
`;

// 主要布局
const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

// 主内容区域
const MainContent = styled.div`
  width: 85%;
  height: 100%;
  padding: 30px;
  position: relative;
`;

// 技能侧边栏
const SkillsSidebar = styled.div`
  width: 15%;
  height: 100%;
  background: ${theme.darkGradient};
  color: white;
  padding: 30px 15px;
  position: relative;
  right: 0;

  @media print {
    width: 15% !important;
    height: 100% !important;
    background: ${theme.darkGradient} !important;
    color: white !important;
    padding: 30px 15px !important;
    position: relative !important;
    right: 0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 装饰元素
const Decoration = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${theme.primaryGradient};
  opacity: 0.03;
  z-index: 0;
`;

const Decoration1 = styled(Decoration)`
  width: 300px;
  height: 300px;
  top: -150px;
  left: -150px;
`;

const Decoration2 = styled(Decoration)`
  width: 200px;
  height: 200px;
  bottom: -100px;
  right: 50px;
`;

// 头部容器
const HeaderContainer = styled.div`
  border-bottom: 2px solid ${theme.accent};
  padding-bottom: 20px;
  margin-bottom: 25px;
  position: relative;
`;

// 姓名样式
const Name = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  background: ${theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media print {
    color: ${theme.accent} !important;
    -webkit-text-fill-color: ${theme.accent} !important;
  }
`;

// 职位标题
const JobTitle = styled.div`
  font-size: 18px;
  color: ${theme.accent};
  margin-bottom: 15px;
  font-weight: 500;
`;

// 联系信息容器
const ContactInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

// 联系信息项
const ContactItem = styled.div`
  margin-right: 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  .anticon {
    margin-right: 8px;
  }
`;

// 内容区块
const Section = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

// 区块标题
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  padding-left: 15px;
  position: relative;
  color: ${theme.text};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: ${theme.primaryGradient};
    border-radius: 3px;
  }
`;

// 技能标题
const SkillsTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 10px;
  position: relative;
  color: white;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.3);
  }

  @media print {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 技能项容器
const SkillItem = styled.div`
  margin-bottom: 15px;
`;

// 技能名称和数值
const SkillNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 12px;
  color: white;

  @media print {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 技能进度条
const SkillProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
  overflow: hidden;

  @media print {
    background: rgba(255,255,255,0.2) !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 技能进度条填充
const SkillProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent}%;
  background: ${theme.primaryGradient};

  @media print {
    background: ${theme.primaryGradient} !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 卡片样式
const Card = styled.div`
  background: white;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.softShadow};
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${theme.primaryGradient};
  }

  @media print {
    box-shadow: none;
    border: 1px solid #eee;
  }
`;

// 卡片标题
const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${theme.accent};
`;

// 卡片网格布局
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

// 链接卡片布局
const LinkCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 15px;
`;

// 链接图标
const LinkIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.primaryGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-weight: bold;

  @media print {
    background: ${theme.primaryGradient} !important;
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 链接内容
const LinkContent = styled.div`
  flex: 1;
`;

// 项目卡片
const ProjectCard = styled(Card)`
  margin-bottom: 20px;
`;

// 项目头部
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

// 项目标题
const ProjectTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: ${theme.accent};
`;

// 项目状态标签
const StatusTag = styled.span`
  display: inline-block;
  padding: 2px 12px;
  border-radius: 15px;
  background: ${props => props.color || theme.primaryGradient};
  color: white;
  font-size: 12px;

  @media print {
    background: ${props => props.color || theme.primaryGradient} !important;
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 技术标签容器
const TechTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

// 技术标签
const TechTag = styled.span`
  display: inline-block;
  background: rgba(108,92,231,0.1);
  color: ${theme.accent};
  padding: 3px 10px;
  border-radius: 15px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 12px;

  @media print {
    background: rgba(108,92,231,0.1) !important;
    color: ${theme.accent} !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
`;

// 二维码容器
const QRCodesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

// 单个二维码
const QRCode = styled.div`
  width: 100px;
  height: 100px;
  background: #f1f1f1;
  border: 1px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

// 更新时间
const UpdateTime = styled.div`
  text-align: center;
  margin-top: 15px;
  font-style: italic;
  font-size: 12px;
  color: #777;
`;

// 装饰文字
const DecorationText = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  transform: rotate(-5deg);
  color: ${theme.accent};
  font-weight: bold;
  opacity: 0.5;
`;

// 关键词云
const KeywordsCloud = styled.div`
  position: absolute;
  bottom: 50px;
  right: 150px;
  transform: rotate(15deg);
  opacity: 0.07;
  font-size: 10px;
  font-weight: bold;
`;

// 关键词容器
const KeywordsContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
`;

// 关键词
const Keyword = styled.span`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;

// 打印按钮容器
const PrintButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media print {
    display: none !important;
  }
`;

// 打印设置提示
const PrintInstructions = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 5px;

  @media print {
    display: none !important;
  }
`;

// 第一页内容包装器
const FirstPageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  
  @media print {
    display: block !important;
    visibility: visible !important;
    background-color: white !important;
  }
`;

// 第二页内容包装器
const SecondPageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  padding: 30px;
  
  @media print {
    display: block !important;
    visibility: visible !important;
    background-color: white !important;
    padding: 30px !important;
  }
`;

// 组件函数：技能条目
const SkillItemComponent = ({ name, value }) => {
  return (
      <SkillItem>
        <SkillNameContainer>
          <span>{name}</span>
          <span>{value}%</span>
        </SkillNameContainer>
        <SkillProgressBar>
          <SkillProgressFill percent={value} />
        </SkillProgressBar>
      </SkillItem>
  );
};

// 组件函数：链接卡片
const LinkCardComponent = ({ icon, title, url, text, description }) => {
  return (
      <LinkCard>
        <LinkIcon>{icon}</LinkIcon>
        <LinkContent>
          <strong>{title}</strong><br />
          {url ? <a href={url}>{url}</a> : <span>{text}</span>}
          <div style={{ color: '#777', marginTop: '3px' }}>{description}</div>
        </LinkContent>
      </LinkCard>
  );
};

// 组件函数：推荐人卡片
const ReferenceCardComponent = ({ name, position, phone, email }) => {
  return (
      <Card>
        <h3 style={{ marginBottom: '10px', color: theme.accent }}>{name}</h3>
        <div style={{ marginBottom: '5px' }}><strong>职位:</strong> {position}</div>
        <div style={{ marginBottom: '5px' }}><strong>电话:</strong> {phone}</div>
        <div><strong>邮箱:</strong> <a href={`mailto:${email}`} style={{ color: theme.accent }}>{email}</a></div>
      </Card>
  );
};

// 组件函数：项目卡片
const ProjectCardComponent = ({ title, status, description, technologies, statusColor }) => {
  return (
      <ProjectCard>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <StatusTag color={statusColor}>{status}</StatusTag>
        </ProjectHeader>
        <p>{description}</p>
        <TechTags>
          {technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechTags>
      </ProjectCard>
  );
};

// 主组件
const ResumeApp = () => {
  const handlePrint = () => {
    // 打印前添加一些延迟，确保样式被正确应用
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
      <>
        <GlobalPrintStyle />
        <ResumeContainer>
          {/* 第一页 */}
          <ResumePage className="resume-page first-page">
            <FirstPageContent>
              <Decoration1 />
              <Decoration2 />

              <Layout>
                {/* 主内容区域 */}
                <MainContent>
                  {/* 头部信息 */}
                  <HeaderContainer>
                    <Name>张三</Name>
                    <JobTitle>资深全栈开发工程师</JobTitle>
                    <ContactInfoContainer>
                      <ContactItem>
                        <MailOutlined /> email@example.com
                      </ContactItem>
                      <ContactItem>
                        <PhoneOutlined /> 138-8888-8888
                      </ContactItem>
                      <ContactItem>
                        <GlobalOutlined /> www.example.com
                      </ContactItem>
                      <ContactItem>
                        <EnvironmentOutlined /> 北京市朝阳区
                      </ContactItem>
                    </ContactInfoContainer>
                  </HeaderContainer>

                  {/* 关于我 */}
                  <Section>
                    <SectionTitle>关于我</SectionTitle>
                    <Description />
                  </Section>
                </MainContent>

                {/* 专业技能侧边栏 */}
                <SkillsSidebar>
                  <SkillsTitle>专业技能</SkillsTitle>
                  <SkillItemComponent name="HTML5" value={95} />
                  <SkillItemComponent name="CSS3" value={90} />
                  <SkillItemComponent name="JavaScript" value={95} />
                  <SkillItemComponent name="TypeScript" value={85} />
                  <SkillItemComponent name="React" value={90} />
                  <SkillItemComponent name="Vue" value={80} />
                  <SkillItemComponent name="Angular" value={70} />
                  <SkillItemComponent name="Node.js" value={92} />
                  <SkillItemComponent name="Python" value={88} />
                  <SkillItemComponent name="Java" value={85} />
                  <SkillItemComponent name="MySQL" value={90} />
                  <SkillItemComponent name="MongoDB" value={92} />
                  <SkillItemComponent name="Redis" value={88} />
                  <SkillItemComponent name="Docker" value={85} />
                  <SkillItemComponent name="Kubernetes" value={80} />
                </SkillsSidebar>
              </Layout>
            </FirstPageContent>
          </ResumePage>

          {/* 第二页 */}
          <ResumePage className="resume-page second-page">
            <SecondPageContent>
              {/* 作品集部分 */}
              <Section>
                <CardTitle>在线作品集与社交媒体</CardTitle>
                <CardGrid>
                  <LinkCardComponent
                      icon="GH"
                      title="GitHub"
                      url="https://github.com/username"
                      description="2000+ Stars | 50+ 开源项目"
                  />
                  <LinkCardComponent
                      icon="BL"
                      title="技术博客"
                      url="https://techblog.example.com"
                      description="50+ 原创文章 | 月访问 10万+"
                  />
                  <LinkCardComponent
                      icon="SO"
                      title="Stack Overflow"
                      url="https://stackoverflow.com/users/123456"
                      description="声望 15k+ | Top 5% 贡献者"
                  />
                  <LinkCardComponent
                      icon="JJ"
                      title="掘金主页"
                      url="https://juejin.cn/user/123456"
                      description="关注者 5k+ | 优质创作者"
                  />
                  <LinkCardComponent
                      icon="ZH"
                      title="知乎专栏: 全栈开发日记"
                      url="https://www.zhihu.com/people/username"
                      description="10万+ 阅读 | 3k+ 赞同"
                  />
                  <LinkCardComponent
                      icon="🌐"
                      title="个人网站"
                      url="https://www.example.com"
                      description="作品集展示 | 技术文档"
                  />
                  <LinkCardComponent
                      icon="WX"
                      title="微信公众号"
                      text="全栈技术分享"
                      description="关注者 8k+ | 周更技术文章"
                  />
                  <LinkCardComponent
                      icon="BL"
                      title="bilibili"
                      url="https://space.bilibili.com/123456"
                      description="粉丝 2万+ | 技术视频教程"
                  />
                </CardGrid>
              </Section>

              {/* 推荐人信息 */}
              <Section>
                <CardTitle>推荐人信息</CardTitle>
                <CardGrid>
                  <ReferenceCardComponent
                      name="李四"
                      position="ABC科技 技术总监"
                      phone="139-xxxx-xxxx"
                      email="lisi@example.com"
                  />
                  <ReferenceCardComponent
                      name="王五"
                      position="XYZ互联网 产品经理"
                      phone="135-xxxx-xxxx"
                      email="wangwu@example.com"
                  />
                  <ReferenceCardComponent
                      name="赵六"
                      position="DEF创业公司 CTO"
                      phone="136-xxxx-xxxx"
                      email="zhaoliu@example.com"
                  />
                  <ReferenceCardComponent
                      name="钱七"
                      position="GHI科技 前端负责人"
                      phone="137-xxxx-xxxx"
                      email="qianqi@example.com"
                  />
                </CardGrid>
              </Section>

              {/* 项目作品展示区 */}
              <Section>
                <CardTitle>代表作品</CardTitle>
                <ProjectCardComponent
                    title="开源CMS内容管理系统"
                    status="进行中"
                    description="一个基于微服务架构的现代化内容管理系统，为中小企业提供灵活且易用的内容发布平台。"
                    technologies={["React", "Node.js", "GraphQL", "MongoDB", "Docker"]}
                    statusColor={theme.primaryGradient}
                />
                <ProjectCardComponent
                    title="React 组件库"
                    status="2000+ Stars"
                    description="一套轻量级、高性能的React组件库，包含50+常用组件，支持主题定制和国际化。"
                    technologies={["React", "TypeScript", "Styled-Components", "Storybook"]}
                    statusColor="linear-gradient(135deg, #00b894, #00cec9)"
                />
              </Section>

              {/* 页脚 */}
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <p>扫描右侧二维码，查看我的更多作品和技术分享</p>
                <QRCodesContainer>
                  <QRCode>
                    <span>微信二维码</span>
                  </QRCode>
                  <QRCode>
                    <span>个人网站</span>
                  </QRCode>
                </QRCodesContainer>
                <UpdateTime>最后更新时间：2025年2月</UpdateTime>
              </div>

              {/* 悬浮装饰元素 */}
              <DecorationText>
                创造 · 分享 · 成长
              </DecorationText>

              {/* 技术关键词云 */}
              <KeywordsCloud>
                <KeywordsContainer>
                  <Keyword top="10px" left="20px">JAVASCRIPT</Keyword>
                  <Keyword top="30px" left="50px">REACT</Keyword>
                  <Keyword top="5px" left="120px">NODE.JS</Keyword>
                  <Keyword top="50px" left="10px">MONGODB</Keyword>
                  <Keyword top="70px" left="40px">PYTHON</Keyword>
                  <Keyword top="25px" left="140px">DOCKER</Keyword>
                  <Keyword top="45px" left="100px">TYPESCRIPT</Keyword>
                  <Keyword top="65px" left="130px">FULL-STACK</Keyword>
                </KeywordsContainer>
              </KeywordsCloud>
            </SecondPageContent>
          </ResumePage>
        </ResumeContainer>

        {/* 打印按钮 */}
        <PrintButtonContainer className="print-button-container">
          <Button type="primary" icon={<PrinterOutlined />} onClick={handlePrint} size="large">
            打印简历
          </Button>
          <PrintInstructions>
            请在打印设置中选择:<br/>
            • 无边距<br/>
            • A4纸张<br/>
            • 背景图形: 打印
          </PrintInstructions>
        </PrintButtonContainer>
      </>
  );
};

export default ResumeApp;