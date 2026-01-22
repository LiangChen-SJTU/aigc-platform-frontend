<script setup lang="ts">
import demoImg from "./assets/demo-style-transfer.png";
import logoImg from "./assets/logo-cv-research-lab.png";
</script>

<template>
  <div class="page">

    <!-- Header -->
    <header class="header">
      <div class="header-inner">
        <a class="brand" href="#">
          <img class="brand-logo" src="./assets/logo-cv-research-lab.png" alt="CV Research Lab" />
        </a>

        <nav class="nav">
          <a class="nav-item">研究成果</a>
          <a class="nav-item">技术应用</a>
          <a class="nav-item">团队介绍</a>
          <a class="nav-item">学术论文</a>
        </nav>

        <div class="header-actions">
          <button class="primary-btn">联系我们</button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <h1 class="hero-title">袁春课题组</h1>
      <p class="hero-subtitle">由资深导师领衔的研究团队</p>

      <div class="hero-avatar"></div>
      <h3 class="pi-name">袁春 教授</h3>
      <p class="pi-title">课题组负责人 &amp; 博士生导师</p>
      <p class="pi-bio">
        计算机视觉与人工智能领域知名专家，长期专注于图像生成、视觉合成与深度学习算法研究。
        在国际顶级期刊和会议发表论文百余篇，主持多项国家级科研项目与重点专项。
      </p>

      <div class="hero-actions">
        <button class="tag tag-blue">CVPR 2024 Best Paper</button>
        <button class="tag tag-purple">IEEE Fellow</button>
        <button class="tag tag-green">国家杰青获得者</button>
      </div>
    </section>

    <!-- Team -->
    <section class="team-section">
      <h2 class="team-title">核心研究团队</h2>

      <div class="team-grid">
        <div class="member-card">
          <div class="member-avatar av1"></div>
          <div class="member-name">Dr. 李明华</div>
          <div class="member-role">博士后研究员</div>
          <div class="member-desc">计算机视觉博士，专注图像生成研究多年</div>
        </div>

        <div class="member-card">
          <div class="member-avatar av2"></div>
          <div class="member-name">Dr. 王思雨</div>
          <div class="member-role">高级算法工程师</div>
          <div class="member-desc">深度学习专家，发表论文25余篇</div>
        </div>

        <div class="member-card">
          <div class="member-avatar av3"></div>
          <div class="member-name">张伟东</div>
          <div class="member-role">系统架构师</div>
          <div class="member-desc">高性能计算专家，优化系统性能</div>
        </div>
      </div>
    </section>

    <!-- AI Tech -->
    <section class="ai-section">
      <h2 class="ai-title">AI 驱动的视觉生成技术</h2>
      <p class="ai-subtitle">
        探索计算机视觉的无限可能，致力于图像生成、视频合成与智能视觉分析的前沿研究
      </p>

      <div class="ai-actions">
        <a class="ai-btn ai-btn-primary" href="#">查看研究成果</a>
        <a class="ai-btn ai-btn-ghost" href="#">技术文档</a>
      </div>
    </section>

    <!-- Stats Band -->
    <section class="stats-band">
      <div class="stats-band-inner">
        <div class="stat">
          <div class="stat-num stat-blue">50+</div>
          <div class="stat-label">已发表论文</div>
        </div>

        <div class="stat">
          <div class="stat-num stat-purple">100K+</div>
          <div class="stat-label">模型训练数据</div>
        </div>

        <div class="stat">
          <div class="stat-num stat-cyan">20+</div>
          <div class="stat-label">开源项目</div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="features-header">
        <h2 class="features-title">核心功能模块</h2>
        <p class="features-subtitle">基于深度学习的先进视觉生成技术</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon feature-icon--purple"></div>
          <h3 class="feature-name">智能图像生成</h3>
          <p class="feature-desc">基于扩散模型的高质量图像合成技术，支持多样风格和主题的图像生成，广泛应用于艺术创作和商业设计。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon feature-icon--green"></div>
          <h3 class="feature-name">视频内容生成</h3>
          <p class="feature-desc">先进的视频生成模型，可支持从静态图像到动态视频的转换，实现透真的动作序列和丰富的视觉效果。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon feature-icon--pink"></div>
          <h3 class="feature-name">实时渲染加速</h3>
          <p class="feature-desc">优化的神经网络架构，实现毫秒级的图像生成速度，满足实时应用的性能要求和用户体验。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon feature-icon--orange"></div>
          <h3 class="feature-name">跨域内容转换</h3>
          <p class="feature-desc">实现不同视觉域之间的无缛转换，如照片到油画、白天到夜晨等，兼顾多样性和风格迁移。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon feature-icon--blue"></div>
          <h3 class="feature-name">多模态融合生成</h3>
          <p class="feature-desc">结合文本、音频等多种模态信息，生成更加丰富和准确的视觉内容，提升生成质量与可控性。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon feature-icon--cyan"></div>
          <h3 class="feature-name">动态场景重建</h3>
          <p class="feature-desc">从单目或多视觘图像重建三维场景，支持动态物体跟踪和几何感知，应用于 AR/VR 和自动驾驶等领域。</p>
        </div>
      </div>
    </section>

    <!-- Demo -->
    <section class="demo-section">
      <div class="demo-header">
        <h2 class="demo-title">技术演示</h2>
        <p class="demo-subtitle">实际应用案例展示</p>
      </div>

      <div class="demo-grid">
        <!-- 左：文字说明 -->
        <div class="demo-text">
          <h3 class="demo-name">图像风格转换</h3>
          <p class="demo-desc">
            我们的风格转换模型能够在保持内容结构的同时，将一种艺术风格迁移到另一张图像上，
            无需复杂的参数调节即可得到高质量结果，適用于创意设计与视觉内容生产。
          </p>

          <ul class="demo-points">
            <li>支持多种艺术风格</li>
            <li>保持内容结构与细节</li>
            <li>实时处理能力</li>
          </ul>
        </div>

        <!-- 右：图片卡片 -->
        <div class="demo-media">
          <div class="demo-frame">
            <img class="demo-image" :src="demoImg" alt="图像风格转换演示" />
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="highlights">
      <div class="highlights-header">
        <h2 class="highlights-title">研究亮点</h2>
        <p class="highlights-subtitle">最新研究成果展示</p>
      </div>

      <div class="highlights-grid">
        <article class="highlight-card">
          <h3 class="highlight-name highlight-name--blue">Neural Style Transfer 3.0</h3>
          <p class="highlight-desc">
            我们最新的神经风格迁移算法在保持内容结构的同时，实现了更加自然和协调的艺术风格转换效果。
            该算法在多个基准测试中取得了SOTA表现。
          </p>

          <div class="highlight-meta">
            <span class="highlight-bullet">•</span>
            <span class="highlight-tag">训练时间减児2 40%</span>
            <span class="dot">•</span>
            <span class="highlight-tag">质量提児2 5%</span>
          </div>
        </article>

        <article class="highlight-card">
          <h3 class="highlight-name highlight-name--purple">Video Generation Model</h3>
          <p class="highlight-desc">
            高效的视频生成模型，能够在短时间内生成高质量的动态视频序列。支持多种分辨率和帧率设置，
            满足不同应用场景的需求。
          </p>

          <div class="highlight-meta">
            <span class="highlight-bullet">•</span>
            <span class="highlight-tag">支持 4K 输出</span>
            <span class="dot">•</span>
            <span class="highlight-tag">30fps 流畅播放</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Join -->
    <section class="join">
      <div class="join-inner">
        <h2 class="join-title">加入我们的研究行列</h2>

        <p class="join-desc">
          无论你是研究人员、开发者还是对 AI 视觉技术感兴趣的学生，我们都欢迎你的加入。让我们一<br />
          起推动计算机视觉技术的发展。
        </p>

        <div class="join-actions">
          <button class="join-btn join-btn--primary" type="button">申请合作</button>
          <button class="join-btn join-btn--ghost" type="button">查看职位</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <img class="footer-logo-img" :src="logoImg" alt="CV Research Lab" />
          </div>
          <p class="footer-desc">
            致力于计算机视觉前沿技术研究，推动 AI 视觉生成技术的发展与应用。
          </p>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">研究成果</h4>
          <a class="footer-link" href="#">学术论文</a>
          <a class="footer-link" href="#">开源项目</a>
          <a class="footer-link" href="#">技术报告</a>
          <a class="footer-link" href="#">专利成果</a>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">技术应用</h4>
          <a class="footer-link" href="#">图像生成</a>
          <a class="footer-link" href="#">视频合成</a>
          <a class="footer-link" href="#">风格迁移</a>
          <a class="footer-link" href="#">3D重建</a>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">联系方式</h4>
          <div class="footer-info">邮箱: info@cvlab.org</div>
          <div class="footer-info">电话: +86 123 4567 8900</div>
          <div class="footer-info">地址: 北京市海淀区中关村</div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2024 CV Research Lab · All rights reserved
      </div>
    </footer>

  </div>
</template>

<style scoped>
.page {
  background: #020617;
  color: #e5e7eb;
  font-family: system-ui, -apple-system;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
}

.header-inner {
  max-width: 1180px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 0 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  height: 32px;
  width: auto;
  display: block;
}

.nav {
  display: flex;
  gap: 28px;
}

.nav-item {
  font-size: 16px;
  color: rgba(226, 232, 240, 0.85);
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-item:hover {
  background: rgba(148, 163, 184, 0.12);
  color: rgba(255, 255, 255, 0.95);
}

.header-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.primary-btn {
  background: #3b82f6;
  border: none;
  color: #fff;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
}

.primary-btn:hover {
  filter: brightness(1.06);
}

/* Hero */
.hero {
  padding: 56px 20px 44px;
  text-align: center;
  background: rgba(15, 23, 42, 0.92);
}

.hero-title {
  margin: 0;
  font-size: 34px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 1px;
  color: rgba(226, 232, 240, 0.96);
}

.hero-subtitle {
  margin: 10px 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(148, 163, 184, 0.70);
}

.hero-avatar {
  width: 120px;
  height: 120px;
  margin: 34px auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
}

.pi-name {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: rgba(226, 232, 240, 0.96);
}

.pi-title {
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: rgba(148, 163, 184, 0.75);
}

.pi-bio {
  max-width: 760px;
  margin: 10px auto 0;
  font-size: 13px;
  line-height: 1.75;
  color: rgba(148, 163, 184, 0.55);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.tag {
  border: 1px solid rgba(148, 163, 184, 0.18);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: rgba(15, 23, 42, 0.55);
}

.tag-blue {
  color: rgba(147, 197, 253, 0.95);
  border-color: rgba(59, 130, 246, 0.35);
  background: rgba(59, 130, 246, 0.12);
}

.tag-purple {
  color: rgba(216, 180, 254, 0.95);
  border-color: rgba(168, 85, 247, 0.32);
  background: rgba(168, 85, 247, 0.10);
}

.tag-green {
  color: rgba(134, 239, 172, 0.95);
  border-color: rgba(34, 197, 94, 0.30);
  background: rgba(34, 197, 94, 0.12);
}

.tag:hover {
  filter: brightness(1.08);
}

/* Sections */
.section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
}
.dark-section {
  padding: 80px 20px;
  background: #020617;
  text-align: center;
}

/* AI Section */
.ai-section {
  --s: 1.2;
  padding: calc(66px * var(--s)) 20px calc(60px * var(--s));
  text-align: center;
  background: rgba(2, 6, 23, 0.92);
}

.ai-title {
  margin: 0;
  font-size: calc(44px * var(--s));
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.05;
  background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 55%, #c4b5fd 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ai-subtitle {
  margin: calc(16px * var(--s)) auto 0;
  max-width: 860px;
  font-size: calc(14px * var(--s));
  line-height: 1.75;
  color: rgba(148, 163, 184, 0.70);
}

.ai-actions {
  margin-top: calc(26px * var(--s));
  display: flex;
  justify-content: center;
  gap: calc(14px * var(--s));
  flex-wrap: wrap;
}

.ai-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(140px * var(--s));
  height: calc(42px * var(--s));
  padding: 0 calc(18px * var(--s));
  border-radius: calc(10px * var(--s));
  font-size: calc(14px * var(--s));
  font-weight: 800;
  text-decoration: none;
  transition: filter 0.15s ease, background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  filter: brightness(0.78);
}

.ai-btn-primary {
  background: rgba(59, 130, 246, 0.60);
  border: 1px solid rgba(59, 130, 246, 0.40);
  color: rgba(255, 255, 255, 0.95);
}

.ai-btn-ghost {
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(59, 130, 246, 0.35);
  color: rgba(147, 197, 253, 0.85);
}

.ai-btn:hover {
  filter: brightness(1.08);
}

.ai-btn-primary:hover {
  background: rgba(59, 130, 246, 0.80);
  border-color: rgba(59, 130, 246, 0.55);
}

.ai-btn-ghost:hover {
  background: rgba(59, 130, 246, 0.14);
  border-color: rgba(59, 130, 246, 0.55);
  color: rgba(191, 219, 254, 0.95);
}

/* Stats Band */
.stats-band {
  background: rgba(30, 41, 59, 0.55);
  border-top: 1px solid rgba(148, 163, 184, 0.08);
  border-bottom: 1px solid rgba(148, 163, 184, 0.06);
  padding: 42px 20px;
}

.stats-band-inner {
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  text-align: center;
}

.stat {
  flex: 1;
}

.stat-num {
  font-size: 24px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 12px;
  font-weight: 600;
  color: rgba(226, 232, 240, 0.65);
}

.stat-blue { color: rgba(96, 165, 250, 0.95); }
.stat-purple { color: rgba(167, 139, 250, 0.95); }
.stat-cyan { color: rgba(34, 211, 238, 0.92); }

@media (max-width: 820px) {
  .stats-band-inner {
    flex-direction: column;
    gap: 18px;
  }
}

/* Team */
.team-section {
  padding: 56px 20px 64px;
  background: rgba(15, 23, 42, 0.92);
  text-align: center;
}

.team-title {
  margin: 0 0 34px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: rgba(226, 232, 240, 0.92);
}

.team-grid {
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
  align-items: start;
}

.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-avatar {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  margin-bottom: 14px;
  filter: saturate(1.05);
}

.av1 { background: radial-gradient(circle at 30% 30%, #60a5fa, #7c3aed); }
.av2 { background: radial-gradient(circle at 30% 30%, #34d399, #10b981); }
.av3 { background: radial-gradient(circle at 30% 30%, #f472b6, #a855f7); }

.member-name {
  font-size: 14px;
  font-weight: 700;
  color: rgba(226, 232, 240, 0.92);
  margin-top: 2px;
}

.member-role {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(148, 163, 184, 0.72);
}

.member-desc {
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.55;
  max-width: 220px;
  color: rgba(148, 163, 184, 0.45);
}

@media (max-width: 860px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }
}

/* Features */
.features {
  padding: 64px 20px 70px;
  background: rgba(2, 6, 23, 0.92);
}

.features-header {
  text-align: center;
  margin-bottom: 34px;
}

.features-title {
  margin: 0;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: rgba(226, 232, 240, 0.92);
}

.features-subtitle {
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(148, 163, 184, 0.62);
}

.features-grid {
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.feature-card {
  background: rgba(30, 41, 59, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.06);
  border-radius: 14px;
  padding: 18px 18px 16px;
  min-height: 132px;
  transition: border-color 0.18s ease, background 0.18s ease, filter 0.18s ease;
}

.feature-card:hover {
  border-color: rgba(96, 165, 250, 0.45);
  filter: brightness(1.05);
}

.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  margin-bottom: 12px;
}

.feature-icon--purple { background: linear-gradient(135deg, #7c3aed, #60a5fa); }
.feature-icon--green  { background: linear-gradient(135deg, #10b981, #22c55e); }
.feature-icon--pink   { background: linear-gradient(135deg, #a855f7, #f472b6); }
.feature-icon--orange { background: linear-gradient(135deg, #f97316, #fb7185); }
.feature-icon--blue   { background: linear-gradient(135deg, #2563eb, #60a5fa); }
.feature-icon--cyan   { background: linear-gradient(135deg, #06b6d4, #22d3ee); }

.feature-name {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: rgba(226, 232, 240, 0.92);
}

.feature-desc {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.65;
  color: rgba(148, 163, 184, 0.55);
}

@media (max-width: 980px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Demo Section */
.demo-section {
  padding: 64px 20px 76px;
  background: rgba(30, 41, 59, 0.55);
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.demo-header {
  text-align: center;
  margin-bottom: 34px;
}

.demo-title {
  margin: 0;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: rgba(226, 232, 240, 0.92);
}

.demo-subtitle {
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(148, 163, 184, 0.62);
}

.demo-grid {
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 34px;
  align-items: center;
}

.demo-text {
  text-align: left;
}

.demo-name {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: rgba(226, 232, 240, 0.92);
}

.demo-desc {
  margin: 12px 0 0;
  font-size: 12px;
  line-height: 1.75;
  color: rgba(226, 232, 240, 0.74);
  max-width: 520px;
}

.demo-points {
  margin: 16px 0 0;
  padding-left: 18px;
  color: rgba(226, 232, 240, 0.70);
  font-size: 12px;
  line-height: 1.7;
}

.demo-points li {
  margin: 6px 0;
}

.demo-media {
  display: flex;
  justify-content: center;
}

.demo-frame {
  width: min(520px, 100%);
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.12);
  padding: 14px;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
}

.demo-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 900px) {
  .demo-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .demo-text {
    text-align: center;
  }

  .demo-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .demo-points {
    display: inline-block;
    text-align: left;
  }
}

/* Highlights Section */
.highlights {
  padding: 62px 20px 70px;
  background: rgba(2, 6, 23, 0.92);
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.highlights-header {
  text-align: center;
  margin-bottom: 28px;
}

.highlights-title {
  margin: 0;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: rgba(226, 232, 240, 0.92);
}

.highlights-subtitle {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(148, 163, 184, 0.62);
}

.highlights-grid {
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.highlight-card {
  background: rgba(30, 41, 59, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 14px;
  padding: 18px 18px 16px;
  transition: border-color 0.16s ease, background 0.16s ease, filter 0.16s ease;
}

.highlight-card:hover {
  border-color: rgba(96, 165, 250, 0.35);
  background: rgba(30, 41, 59, 0.46);
  filter: brightness(1.03);
}

.highlight-name {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0.2px;
}

.highlight-name--blue {
  color: rgba(96, 165, 250, 0.95);
}

.highlight-name--purple {
  color: rgba(167, 139, 250, 0.95);
}

.highlight-desc {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.7;
  color: rgba(148, 163, 184, 0.62);
}

.highlight-meta {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(148, 163, 184, 0.58);
  font-size: 12px;
}

.highlight-tag {
  color: rgba(148, 163, 184, 0.72);
  font-weight: 700;
}

.dot {
  opacity: 0.55;
}

@media (max-width: 860px) {
  .highlights-grid {
    grid-template-columns: 1fr;
  }
}

/* Join Section */
.join {
  padding: 72px 20px 78px;
  background: linear-gradient(90deg, rgba(30, 58, 138, 0.95), rgba(88, 28, 135, 0.95));
  border-top: 1px solid rgba(148, 163, 184, 0.10);
}

.join-inner {
  max-width: 1060px;
  margin: 0 auto;
  text-align: center;
}

.join-title {
  margin: 0;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.92);
}

.join-desc {
  margin: 16px auto 0;
  max-width: 760px;
  font-size: 13px;
  line-height: 1.8;
  color: rgba(226, 232, 240, 0.78);
}

.join-actions {
  margin-top: 22px;
  display: inline-flex;
  gap: 14px;
}

.join-btn {
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.14s ease, filter 0.14s ease, background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
}

.join-btn--primary {
  background: rgba(255, 255, 255, 0.92);
  color: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.join-btn--ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.join-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

.join-btn--ghost:hover {
  border-color: rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.08);
}

.join-btn:active {
  transform: translateY(0px);
  filter: brightness(1.02);
}

/* Footer */
.footer {
  background: rgba(2, 6, 23, 0.96);
  border-top: 1px solid rgba(148, 163, 184, 0.10);
}

.footer-inner {
  max-width: 1060px;
  margin: 0 auto;
  padding: 34px 20px 22px;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.1fr;
  gap: 28px;
}

.footer-brand .footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.footer-logo-img {
  height: 26px;
  width: auto;
  display: block;
}

.footer-desc {
  margin: 0;
  font-size: 12px;
  line-height: 1.8;
  color: rgba(148, 163, 184, 0.62);
  max-width: 320px;
}

.footer-title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.4px;
  color: rgba(226, 232, 240, 0.94);
}

.footer-link {
  display: block;
  padding: 6px 0;
  font-size: 12px;
  color: rgba(148, 163, 184, 0.70);
  text-decoration: none;
  transition: color 0.14s ease, filter 0.14s ease;
}

.footer-link:hover {
  color: rgba(226, 232, 240, 0.90);
  filter: brightness(1.05);
}

.footer-info {
  padding: 6px 0;
  font-size: 12px;
  color: rgba(148, 163, 184, 0.70);
}

.footer-bottom {
  padding: 18px 20px 24px;
  text-align: center;
  font-size: 12px;
  color: rgba(148, 163, 184, 0.55);
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer-desc {
    max-width: none;
  }
}

@media (max-width: 520px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>
