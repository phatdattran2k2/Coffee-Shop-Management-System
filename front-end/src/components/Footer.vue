<template>
  <div class="footer">
    <a href="https://github.com/phatdattran2k2" target="_blank" class="footer-link">
      <i class="fa-solid fa-bookmark bookmark"></i>
      <span class="footer-link--text"> https://github.com/phatdattran2k2</span>
    </a>
    <a href="" class="footer-link margin-left">
      <i class="fa-solid fa-envelope letter"></i>
      <span class="footer-link--text"> datb2014971@student.ctu.edu.vn</span>
    </a>
    <div class="footer-right">
      <span class="footer-link--text copyright">Copyright@2023</span>
      <i class="fa-brands fa-facebook social-icon"></i>
      <i class="fa-brands fa-instagram social-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer_component'
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;

  background-color: #00abeb;
}

.footer-link {
  margin-left: 16px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.footer-link:hover {
  opacity: 0.8;
}

.margin-left {
  margin-left: 60px;
}

.bookmark,
.letter {
  color: var(--white-color);
}

.footer-link--text {
  font-size: 1.4rem;
  color: var(--white-color);
}

.footer-right {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  margin-right: 15px;
}

.social-icon {
  font-size: 1.8rem;
  margin: 0 4px 0 4px;
  transition: all 0.2s;
  cursor: pointer;
}

.social-icon:hover {
  color: var(--white-color);
}

.copyright {
  margin-right: 4px;
  transition: all 0.2s;
  cursor: pointer;
}

.copyright:hover {
  opacity: 0.8;
}
</style>
