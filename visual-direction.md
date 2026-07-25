# Visual Direction

## 1. Core Direction

shuosure 的网站应像一个安静、专业的设计展厅：界面克制，信息清楚，作品图成为视觉主角。整体不追求炫技，而是让客户快速感到“这个设计师稳定、审美好、理解商业、能把项目落地”。

关键词：

- 专业可信
- 安静克制
- 高级感
- 清晰可读
- 作品优先
- 商业转化导向

## 2. Visual Personality

整体气质建议为“克制的编辑式作品集 + 清晰的商业咨询入口”。

网站不应像设计潮流实验页，也不应像普通模板站。它需要同时具备两件事：

1. 作品集的审美感：留白、比例、图文节奏、图片呈现要讲究。
2. 服务型网站的清晰度：客户能快速看到服务范围、项目经验和联系方式。

视觉上让作品承担颜色和情绪，界面本身保持黑、白、灰和少量温润底色。

## 3. Color System

### Light Mode

- Page background：`#F8F8F5`
- Main text：`#111111`
- Secondary text：`#65635F`
- Muted text：`#8A8781`
- Border：`#E3E0DA`
- Surface：`#FFFFFF`
- Soft surface：`#F1F0EC`
- Primary button background：`#111111`
- Primary button text：`#FFFFFF`
- Secondary button border：`#C9C5BC`

### Dark Mode

- Page background：`#0D0D0D`
- Main text：`#F4F2EC`
- Secondary text：`#B9B4AA`
- Muted text：`#858178`
- Border：`#292826`
- Surface：`#151515`
- Soft surface：`#1D1C1A`
- Primary button background：`#F4F2EC`
- Primary button text：`#111111`
- Secondary button border：`#4A4742`

### Color Usage Rules

- 不使用大面积彩色背景。
- 不使用渐变、彩色光斑、装饰球或过度氛围化背景。
- 香水项目自带暖橙、红、白、黑等视觉情绪，网站 UI 不与作品抢色。
- 链接和按钮不用高饱和强调色，主要通过黑白反差、细边框和排版层级表达。

## 4. Typography

### Font Direction

中文字体建议使用系统默认无衬线，保持清晰、稳定、加载快。

推荐字体栈：

```css
font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
```

### Type Scale

- Hero title：48-72px desktop，34-42px mobile
- Page title：40-56px desktop，32-38px mobile
- Section title：24-32px desktop，22-26px mobile
- Card title：18-24px
- Body：15-17px
- Small meta：12-14px

### Typography Rules

- 字间距保持 0，不使用负字距。
- 标题不写得太满，保留呼吸感。
- 中文正文行高建议 1.7-1.9，提升阅读稳定性。
- 展示层英文品牌名使用大写 `SHUOSURE`，作为视觉锚点；正文叙述中可保留 `shuosure`。
- 中文主张分行排版，不与英文挤在同一行。
- 首页大标题不超过两行，移动端不强行挤压。

## 5. Layout System

### Global Layout

- 页面最大内容宽度：1180-1280px
- 主体左右留白：desktop 40-64px，tablet 28-40px，mobile 20px
- 区块上下间距：desktop 96-140px，mobile 64-88px
- 导航高度：64-76px
- 卡片圆角：6-8px
- 图片圆角：0-8px，优先保持作品图完整

### Layout Feel

- 首页不做复杂首屏插画。
- 首屏以文字建立定位，同时露出作品区域的开头。
- 页面 sections 保持全宽自然排布，不把大区块做成漂浮卡片。
- 作品展示可以使用大图 + 简短说明，避免密集堆图。
- 卡片只用于项目列表、文章列表、联系二维码等明确内容块。

## 6. Homepage Visual Structure

### Header

- 左侧：`shuosure`
- 右侧：Work / About / Journal / Contact
- 移动端：品牌名 + 菜单按钮
- 风格：透明或背景同页面，滚动后可加极细底边线

### Hero

目标：第一屏立刻说明身份和价值。

建议布局：

- 左上大标题采用组合式排版：`SHUOSURE` / `全栈设计` / `为新品牌建立清晰的视觉秩序`
- 标题下方放 1 段短文案。
- CTA 两个：查看作品、微信咨询。
- 首屏底部露出精选项目标题或第一张作品图的一部分。

视觉要求：

- 不使用装饰性大背景。
- 不把 Hero 内容放进卡片。
- 不使用过强动画。

### Short Intro

- 使用两栏布局：左侧小标题，右侧介绍文字。
- 强调“策略、体验、视觉、商业物料”的完整能力。

### Featured Work

- 首页优先展示 2 个项目：蜜循 + 虚拟占位项目。
- 第 3 个项目正式素材不足时，可以不展示，避免假内容太多。
- 项目卡片建议：
  - 大图
  - 项目名
  - 类型 / 服务范围
  - 一句话成果

### Selected Journal

- 首版展示 1 篇项目复盘即可。
- 文章卡片保持朴素，不要用封面图制造内容厚度。

### Contact CTA

- 可使用深色整宽区块或边框区块。
- 放微信号和二维码。
- 文案要直接：适合产品从 0 到 1、品牌升级、包装视觉或长期设计支持。

## 7. Work Page

目标：让客户用最少时间判断作品质量和服务范围。

布局建议：

- 页面标题 + 一句话说明
- 筛选标签可保留，但首版项目少时不必做复杂筛选
- 项目列表使用 2 列 desktop，1 列 mobile
- 每个项目卡片保持稳定比例

图片规则：

- 封面图优先使用原始比例的视觉中心。
- 对竖图使用 `object-fit: cover` 时要避免裁掉主要文字。
- 蜜循封面可以使用竖版图，卡片容器建议 4:5 或 3:4。
- 包装横图适合项目详情页大图展示。

## 8. Project Detail Page

目标：证明设计过程和商业理解，不只展示漂亮图片。

建议结构：

1. 项目 Hero
   - 项目名
   - 项目类型
   - 服务范围
   - 项目封面
2. Project Meta
   - 客户类型
   - 周期
   - 角色
   - 交付物
3. Background
4. Challenge
5. Design Direction
6. Visual System
7. Applications
   - 包装
   - 详情页
   - 推广图
8. Reflection
9. Next Project / Contact CTA

视觉规则：

- 图文节奏要有停顿，不连续堆满图片。
- 超长详情页图片需要放入可控宽度中展示，可在页面中截取关键段落，不直接让 25259px 长图撑满所有内容。
- 方形推广图可用 2-3 列网格，移动端改为单列。
- 黑色占位图要作为临时素材处理，正式设计时不要加过度说明。

## 9. About Page

目标：建立人的信任感，不写空泛履历。

建议视觉：

- 使用大段留白和清晰文本。
- 可放个人照片，但没有照片时先不强行做头像区域。
- 能力范围使用简洁列表，不做复杂技能图表。

核心模块：

- 个人介绍
- 设计判断
- 服务范围
- 工作方式
- 适合合作的客户
- 微信联系

## 10. Journal Page

目标：展示专业判断，不追求数量。

首版策略：

- 保留文章页。
- 只有 1 篇占位文章时，页面应像“精选笔记”，不要做成空列表。
- 文章卡片以标题、分类、摘要、日期为主。

文章详情：

- 正文宽度控制在 680-760px。
- 行高舒适，段落间距清楚。
- 文章底部关联“蜜循”项目。

## 11. Contact Page

目标：降低咨询成本。

建议视觉：

- 左侧：合作说明和适合项目类型。
- 右侧：微信二维码卡片。
- 移动端：二维码放在说明之后。

内容：

- 微信号：`shuo95930`
- 微信二维码：`assets/contact/wechat-qr.jpg`
- 咨询前可准备：项目背景、当前阶段、上线时间、预算范围、参考风格。

## 12. Interaction Rules

- 动效保持轻：hover 轻微透明度、图片轻微缩放、边框变深即可。
- 不做复杂滚动动画、视差、光效或大规模动态背景。
- 按钮状态要完整：default、hover、focus、disabled。
- 移动端点击区域不小于 44px。
- 所有交互应服务浏览和联系，不为了展示技术而存在。

## 13. Mobile Rules

- 移动端首页 Hero 不超过一个屏幕太多，首屏底部要看到下一部分提示。
- 项目卡片单列展示，图文间距清楚。
- 导航使用简单菜单，不做复杂展开层。
- 微信二维码在移动端宽度控制在 220-280px。
- 长标题允许换行，不压缩字距。

## 14. Dark Mode Rules

- 暗黑模式不是纯黑高反差，要保持柔和。
- 作品图不加重滤镜。
- 边框和分割线在暗黑模式下更轻，避免页面显得碎。
- 二维码区域可以保留白底容器，确保可扫描。

## 15. What To Avoid

- 不做大面积彩色渐变。
- 不做装饰性光斑、球体、噪点背景。
- 不做复杂首屏动画。
- 不把所有内容塞在首页。
- 不用大量标签制造专业感。
- 不把虚拟占位项目包装成真实案例。
- 不使用过度营销化文案。

## 16. First Version Design Decision

首版网站建议采用：

- 中文单语
- 首页 + 作品 + 项目详情 + 关于 + 文章 + 联系
- 首页展示 2 个项目，其中 1 个真实项目、1 个占位项目
- 文章页保留 1 篇项目复盘
- 联系方式以微信为主
- 视觉以黑白灰、细线、留白和作品图为核心
- 默认支持移动端与暗黑模式
