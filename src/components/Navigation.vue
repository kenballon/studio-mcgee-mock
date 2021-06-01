<template>
  <header>
    <nav class="container xl mx-auto">
      <div class="nav-wrapper flex items-center py-4 justify-between">
        <div class="branding">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/userProfile/logo.svg" alt />
          </router-link>
        </div>
        <div class="nav-links" v-show="!isMobile">
          <router-link class="nav-links_text" to="#">Lifestyle</router-link>
          <router-link class="nav-links_text" to="#">Design</router-link>
          <router-link class="nav-links_text" to="#">The Studio</router-link>
          <router-link class="nav-links_text" to="#">Shop</router-link>
          <router-link class="nav-links_text mr-7" to="#">Blog</router-link>
        </div>
        <div class="icons-wrapper flex items-center">
          <div class="search">
            <img src="../assets/userProfile/search.svg " width="24" alt />
          </div>
          <div class="login-reg ml-7">
            <img src="../assets/userProfile/user.svg" width="24" alt />
          </div>
          <div
            class="mobile-menu ml-7"
            @click="toggleMobileNavi"
            v-show="isMobile"
          >
            <img src="../assets/userProfile/menu.svg" width="24" alt />
          </div>
        </div>
      </div>
    </nav>
    <transition name="mobile-nav-trans">
      <div
        class="mobile-nav flex flex-col justify-between"
        v-show="isMobileNav"
      >
        <div class="mobile-nav-links_wrapper">
          <header class="mob-close flex justify-end p-4">
            <img
              src="../assets/userProfile/cancel.svg"
              width="18"
              alt="close"
              @click="toggleMobileNavi"
            />
          </header>
          <ul class>
            <li>
              <router-link class="nav-links_text" to="#">Lifestyle</router-link>
            </li>
            <li>
              <router-link class="nav-links_text" to="#">Design</router-link>
            </li>
            <li>
              <router-link class="nav-links_text" to="#"
                >The Studio</router-link
              >
            </li>
            <li>
              <router-link class="nav-links_text" to="#">Shop</router-link>
            </li>
            <li>
              <router-link class="nav-links_text mr-7" to="#">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="mobile-menu-newsletter">
          <h3>Join Our Mailing List</h3>
          <div class="newsletter-form-wrapper">
            <form>
              <div class="mform-body pb-1">
                <ul>
                  <li>
                    <label for="newletter-input"></label>
                    <div>
                      <input type="email" name="newletter-input" />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mform-footer">
                <input type="submit" value="Submit" class="newsletter-submit" />
              </div>
            </form>
            <div class="socmed-wrapper">
              <ul class="flex items-center gap-x-5">
                <li>
                  <router-link to="#">
                    <img src="@/assets/soc-med/insta.svg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/soc-med/pinterest.svg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/soc-med/facebook.svg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/soc-med/youtube.svg" alt="" />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      isMobile: null,
      isMobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.isMobile = true;
        return;
      }

      this.isMobile = false;
      this.isMobileNav = false;
      return;
    },

    toggleMobileNavi() {
      this.isMobileNav = !this.isMobileNav;
    },
  },
};
</script>

<style lang="scss">
header {
  border-bottom: 1px solid #96969680;
  .container {
    .nav-wrapper {
      @media screen and (min-width: 300px) and (max-width: 500px) {
        padding-inline: 25px;
      }
      .branding {
        h1 {
          font-size: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }

      .nav-links {
        .nav-links_text {
          font-family: "DM Serif Display";
          font-size: 15px;
          padding: 20px;
          transition: all 0.5s ease;
          &:hover {
            color: rgb(253, 143, 0);
          }
        }
      }

      .icons-wrapper {
        .login-reg,
        .search,
        .mobile-menu {
          img {
            &:hover {
              cursor: pointer;
            }
            @media screen and (min-width: 300px) and (max-width: 500px) {
              width: 20px;
            }
          }
        }
      }
    }
  }

  .mobile-nav {
    width: 80%;
    height: 100%;
    margin-left: 20%;
    right: 0;
    top: 0;
    position: fixed;
    background-color: #f8f7f3;
    z-index: 10;
    div > header {
      background-color: #f3f2eb;
    }
    .mob-close {
      img {
        cursor: pointer;
      }
    }
    .mobile-nav-links_wrapper {
      li {
        padding: 15px 20px;
        border-bottom: 1px solid #96969680;
        .nav-links_text {
          font-family: "DM Serif Display";
          font-size: 15px;
        }
      }
    }
    .newsletter-form-wrapper{
      .socmed-wrapper{
        padding-block:15px;
        background-color: #626050;
        display: grid;
        place-items: center; 
        margin-top:20px;
        border-radius: 3px;        
      }
    }
    .mobile-menu-newsletter {
      padding: 25px;
      h3 {
        font-family: "DM Serif Display";
        font-size: 18px;
        padding-bottom: 16px;
      }
      .mform-body {
        ul {
          li {
            div {
              input {
                width: 100%;
                background-color: transparent;
                border-bottom: 1px solid #96969680;
                padding-top: 15px;
                padding-bottom: 5px;
                font-weight: 300;
              }
            }
          }
        }
      }
      .mform-footer {
        .newsletter-submit {
          background-color: transparent;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
        }
      }
    }
  }

  .mobile-nav-trans-enter-active {
    transition: all 0.5s ease-in-out;
  }

  .mobile-nav-trans-leave-active {
    transition: all 1s ease-out;
  }

  .mobile-nav-trans-enter-from {
    transform: translateX(600px);
  }

  .mobile-nav-trans-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-trans-leave-to {
    transform: translateX(600px);
  }
}
</style>
