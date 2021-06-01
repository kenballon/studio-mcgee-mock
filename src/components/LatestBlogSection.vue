<template lang="en">
    <div class="latest-blog-header-headline">
        <h3 class="txt-headline">Latest Articles</h3>
    </div>
    <div class="latest-blogs-wrapper">
        <div class="cards-wapper grid gap-5">
            <div class="card-article pr-5 pl-5">
                <div class="article-featured-img">
                    <router-link to="#">
                        <img src="../assets/imgs-blog/CATALOUGE-672x450.jpg" alt="">
                    </router-link>
                </div>
                <div class="article-title">
                    <div class="sm-headline caps mt-8">
                        <h5>Decor Favorites</h5>
                    </div>
                    <router-link to="#" class="card-link-title">
                        <h2>The McGee & Co. Summer 2021 Catalogue</h2>
                        <div class="para-light mt-3">Details from our latest collection in collaboration with McGee & Co.</div>
                    </router-link>
                </div>
            </div>

             <div class="card-article pr-5 pl-5">
                <div class="article-featured-img">
                    <router-link to="#">
                        <img src="../assets/imgs-blog/studiomcgee_lifestyle.jpg" alt="">
                    </router-link>
                </div>
                <div class="article-title">
                    <div class="sm-headline caps mt-8">
                        <h5>Design Tips</h5>
                    </div>
                    <router-link to="#" class="card-link-title">
                        <h2>Rug Guide: Simple Tips For Each Room</h2>
                        <div class="para-light mt-3 mb-6">All of your rug questions answered</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LatestBlog",
};
</script>

<style lang="scss">
.latest-blog-header-headline {
  padding-block: 24px;
  border-top: 1px solid #96969680;
  border-bottom: 1px solid #96969680;
  margin-bottom: 30px;
  .txt-headline {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    opacity: 0.8px;
  }
}
.latest-blogs-wrapper {
  width: 100%;
  max-width: 1380px;
  margin-inline: auto;
  padding-inline: 30px;
  .cards-wapper {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    .card-article {
      @media screen and (min-width: 300px) and (max-width: 500px) {
        padding-inline: auto;
        &:not(:first-child) {
          margin-top: 70px;
        }
      }
      .article-featured-img{
         &:hover{
            opacity: 0.6;
          }
      }
      .article-title {
        .sm-headline {
          h5 {
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 12px;
            font-weight: 500;
            opacity: 0.8;
          }
        }
        .card-link-title {
          h2 {
            margin-top: 15px;
            font-family: "DM Serif Display";
            font-size: 47px;
            line-height: 49px;
            @media screen and (min-width: 300px) and (max-width: 500px) {
              font-size: 38px;
            }
          }
          .para-light {
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
