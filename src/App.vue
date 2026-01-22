<script setup lang="ts">
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
          <a class="nav-item active">研究成果</a>
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
      <h1>袁春课题组</h1>
      <p>自动驾驶与智能视觉研究团队</p>

      <div class="hero-avatar"></div>
      <h3>袁春 教授</h3>
      <p class="hero-desc">
        计算机视觉与人工智能方向，长期从事视觉理解、生成模型等研究。
      </p>

      <div class="hero-actions">
        <button class="outline-btn">CVPR 2024 Best Paper</button>
        <button class="outline-btn">Google Scholar</button>
        <button class="outline-btn green">开放招生中</button>
      </div>
    </section>

    <!-- Team -->
    <section class="section">
      <h2>核心研究团队</h2>
      <div class="team">
        <div class="member purple">
          <div class="avatar"></div>
          <h4>Dr. 李明华</h4>
          <p>图像生成 / 多模态</p>
        </div>
        <div class="member green">
          <div class="avatar"></div>
          <h4>Dr. 王思雨</h4>
          <p>三维视觉 / NeRF</p>
        </div>
        <div class="member pink">
          <div class="avatar"></div>
          <h4>张伟东</h4>
          <p>视频理解 / 扩散模型</p>
        </div>
      </div>
    </section>

    <!-- AI Tech -->
    <section class="dark-section">
      <h2>AI 驱动的视觉生成技术</h2>
      <p class="center-desc">
        深入计算机视觉前沿，致力于图像生成、视频合成与智能感知研究
      </p>

      <div class="stats">
        <div><strong>50+</strong><span>论文发表</span></div>
        <div><strong>100K+</strong><span>模型下载</span></div>
        <div><strong>20+</strong><span>开源项目</span></div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <h2>核心功能模块</h2>
      <div class="features">
        <div class="card blue">智能图像生成</div>
        <div class="card green">视频内容生成</div>
        <div class="card pink">实时渲染加速</div>
        <div class="card orange">跨域内容转换</div>
        <div class="card purple">多模态联合生成</div>
        <div class="card cyan">动态场景建模</div>
      </div>
    </section>

    <!-- Demo -->
    <section class="dark-section demo">
      <div class="demo-text">
        <h2>技术演示</h2>
        <p>基于最新生成模型的图像风格迁移与视频合成技术。</p>
        <ul>
          <li>高保真生成</li>
          <li>跨风格迁移</li>
          <li>实时推理</li>
        </ul>
      </div>
      <div class="demo-image"></div>
    </section>

    <!-- Join -->
    <section class="join">
      <h2>加入我们的研究行列</h2>
      <p>欢迎对计算机视觉与 AIGC 感兴趣的同学加入我们</p>
      <div class="join-actions">
        <button class="primary-btn">申请加入</button>
        <button class="outline-btn">查看岗位</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2024 CV Research Lab · All rights reserved</p>
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

.nav-item.active {
  background: rgba(96, 165, 250, 0.14);
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
  text-align: center;
  padding: 80px 20px;
}
.hero-avatar {
  width: 120px;
  height: 120px;
  margin: 40px auto;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
}
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
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

/* Team */
.team {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}
.member {
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
  background: currentColor;
}
.purple { color: #a855f7 }
.green { color: #22c55e }
.pink { color: #ec4899 }

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.card {
  background: #020617;
  border: 1px solid #1e293b;
  padding: 32px;
  border-radius: 12px;
}

/* Demo */
.demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-image {
  width: 420px;
  height: 260px;
  border-radius: 12px;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
}

/* Join */
.join {
  padding: 80px 20px;
  background: linear-gradient(135deg, #4c1d95, #1e3a8a);
  text-align: center;
}

/* Footer */
.footer {
  padding: 24px;
  text-align: center;
  color: #94a3b8;
}
</style>
