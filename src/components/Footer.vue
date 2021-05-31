<template lang="">
  <footer>
    <div class="header mb-9">
      <div class="container xl mx-auto">
        <div class="flex gap-x-12 items-center pt-6 pb-6 ">
          <div class="branding">
            <img src="../assets/userProfile/StudioMcGeeWhite.png" alt="" />
          </div>
          <div class="newletter-footer-subs flex gap-x-5 items-center">
            <h3>Join Our Mailing List</h3>
            <div class="form-container">
              <form class="flex items-center">
                <div class="gform-body">
                  <ul>
                    <li>
                      <label for="input_email-subs-footer">Email</label>
                      <div class="gfield-input">
                        <input
                          type="email"
                          name="input_email-subs-footer"
                          id=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="gform-footer ml-4">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-nav-wrap mb-9">
      <div class="container xl mx-auto flex justify-between flex-wrap">
        <div class="footer-links-wrapper flex justify-between">
          <div class="nav-col">
            <h3 class="dm-serif">The Studio</h3>
            <div class="div-links">
              <router-link to="#" class="nav-footer-links"
                >The Studio</router-link
              >
              <router-link to="#" class="nav-footer-links"
                >Projects</router-link
              >
              <router-link to="#" class="nav-footer-links">About</router-link>
              <router-link to="#" class="nav-footer-links"
                >Services</router-link
              >
              <router-link to="#" class="nav-footer-links">Inquire</router-link>
              <router-link to="#" class="nav-footer-links">Contact</router-link>
            </div>
          </div>
          <div class="nav-col">
            <h3 class="dm-serif">Articles</h3>
            <div class="div-links">
              <router-link to="#" class="nav-footer-links"
                >Design Tips</router-link
              >
              <router-link to="#" class="nav-footer-links">Styling</router-link>
              <router-link to="#" class="nav-footer-links"
                >Room Inspiration</router-link
              >
            </div>
          </div>
          <div class="nav-col">
            <h3 class="dm-serif">Quick Links</h3>
            <div class="div-links">
              <router-link to="#" class="nav-footer-links">Watch</router-link>
              <router-link to="#" class="nav-footer-links"
                >Netflix Show</router-link
              >
              <router-link to="#" class="nav-footer-links">Shop</router-link>
            </div>
          </div>
        </div>
        <div class="footer-details">
          <div class="branding-shop flex items-center gap-x-5">
            <div class="sm-logo">
              <img
                src="../assets/userProfile/McGeeandCo_Logo_White.png"
                alt=""
              />
            </div>
            <div class="sm-headline caps color-white">
              <router-link to="#">Shop Now</router-link>
            </div>
          </div>
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

          <div class="rights-res flex items-center">
            <div class="rights">©Studio McGee</div>
            <div class="rights">|</div>
            <div class="rights">
              Made by
              <a href="https://kenballon.github.io/" target="_blank"
                >Kenneth Ballon</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.dm-serif {
  font-family: "DM Serif Display";
}
footer {
  color: #fff;
  background-color: #303030;

  .header {
    border-bottom: 1px solid rgb(153, 153, 153);
    .branding {
      img {
        max-width: 150px;
      }
    }

    .newletter-footer-subs {
      h3 {
        font-family: "DM Serif Display";
        letter-spacing: 1px;
      }
      .form-container {
        .gform-body {
          ul {
            li {
              label {
                display: none;
              }
              .gfield-input {
                border-bottom: 1px solid #fff;
                input {
                  background-color: transparent;
                  padding-inline: 10px;
                  &:focus {
                    outline: none;
                    caret-color: #fff;
                  }
                }
              }
            }
          }
        }
        .gform-footer {
          input[type="submit"] {
            cursor: pointer;
            background-color: transparent;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 1.5px;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMzUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+Q29udC4gUmVhZGluZyBBcnJvdyAgQ29weSA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9Ik5ld3NsZXR0ZXItQmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjEuMDAwMDAwLCAtMjE0LjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjc1Ij4KICAgICAgICAgICAgPGcgaWQ9IkVtYWlsLUFkZHJlc3MtRm9ybS1GaWVsZC0iPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUyLjAwMDAwMCwgMjEzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb250Li1SZWFkaW5nLUFycm93LS1Db3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2LjAwMDAwMCwgNy4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ni4wMDAwMDAsIC03LjAwMDAwMCkgdHJhbnNsYXRlKDY5LjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjMzIiB5MT0iNSIgeDI9IjAiIHkyPSI1IiBpZD0iU3Ryb2tlLTEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtMyIgcG9pbnRzPSI2IDAgMCA1IDYgMTAiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
            background-repeat: no-repeat;
            background-position: 100%;
            background-size: 34px;
            padding: 0 50px 0 0;
          }
        }
      }
    }
  }

  .footer-nav-wrap {
    .footer-links-wrapper {
      max-width: 66.66%;
      width: 66.66%;
      .nav-col {
        h3 {
          font-size: 19px;
        }
        .div-links {
          margin-top: 15px;
          .nav-footer-links {
            display: block;
            font-size: 10px;
            padding-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            transition: all 0.5s ease;
            opacity: 0.8;
            &:hover {
              color: #fd8f00;
            }
          }
        }
      }
    }
    .footer-details {
      .branding-shop {
        .sm-logo {
          img {
            max-width: 120px;
            margin-right: 12px;
          }
        }
        .sm-headline {
          a {
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: all 0.5s ease;
            opacity: 0.8;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMzUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+Q29udC4gUmVhZGluZyBBcnJvdyAgQ29weSA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9Ik5ld3NsZXR0ZXItQmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjEuMDAwMDAwLCAtMjE0LjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjc1Ij4KICAgICAgICAgICAgPGcgaWQ9IkVtYWlsLUFkZHJlc3MtRm9ybS1GaWVsZC0iPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUyLjAwMDAwMCwgMjEzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb250Li1SZWFkaW5nLUFycm93LS1Db3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2LjAwMDAwMCwgNy4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ni4wMDAwMDAsIC03LjAwMDAwMCkgdHJhbnNsYXRlKDY5LjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjMzIiB5MT0iNSIgeDI9IjAiIHkyPSI1IiBpZD0iU3Ryb2tlLTEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtMyIgcG9pbnRzPSI2IDAgMCA1IDYgMTAiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
            background-repeat: no-repeat;
            background-position: 100%;
            background-size: 34px;
            padding: 0 50px 0 0;
            &:hover {
              color: #fd8f00;
            }
          }
        }
      }

      .socmed-wrapper {
        ul {
          li {
            a {
              padding-right: 5px;
              padding-left: 5px;
              margin-right: 10px;
              margin-left: 10px;
              img {
                max-width: 100%;
              }
            }
          }
        }
      }

      .rights-res {
        div {
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 1px;
          margin-right: 10px;
          a {
            transition: all 0.5s ease;
            opacity: 0.8;
            &:hover {
              color: #fd8f00;
            }
          }
        }
      }
    }
  }

  @media screen and(min-width: 300px) and (max-width: 750px) {
    .header {
      padding: 25px;
      .container {
        .flex {
          flex-wrap: wrap;
          .newletter-footer-subs {
            flex-wrap: wrap;
            margin-top: 30px;
            .form-container {
              .flex {
                display: block;
                .gform-footer.ml-4 {
                  margin-left: auto;
                  margin-top: 30px;
                  input {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .footer-nav-wrap.mb-9 {
      padding: 25px;
      .footer-links-wrapper {
        max-width: 100%;
        width: 100%;
        flex-wrap: wrap;
        border-bottom: 1px solid rgb(153, 153, 153);
        margin-bottom: 20px;
        .nav-col {
          width: 50%;
          margin-bottom: 20px;
        }
      }

      .footer-details {
        width: 100%;
        .branding-shop {
          justify-content: space-between;
        }
        .socmed-wrapper {
          border-bottom: 1px solid rgb(153, 153, 153);
          margin-bottom: 20px;
          ul {
            justify-content: space-evenly;
            li {
              a {
                img {
                  width: 18px;
                  height: 18px;
                }
              }
            }
          }
        }
        .rights-res{           
            justify-content: center;
            margin-top:40px;
        }
      }
    }
  }
}
</style>
