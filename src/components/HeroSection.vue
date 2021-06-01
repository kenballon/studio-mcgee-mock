<template lang="">
  <div class="hero-section">
    <div class="hero-section_inner-wrapper">
      <div class="hero-img-wrapper ">
        <img
          :src="require(`../assets/imgs-blog/${post.blogCoverPhoto}.jpg`)"
          alt=""
        />
      </div>
      <div class="blog-hero-title ">
        <div class="blog-hero-title_wrapper">
          <div class="sm-headline caps">
            <span class="categ">{{post.blogCategory}}</span>
          </div>
          <h2 class="hero-blog-title">
            {{post.blogTitle}}
          </h2>
          <div class="hero-blog-short-desc flex items-center gap-4">
            <div>{{post.blogShortDesc}}</div>
            <router-link to="#"><img src="../assets/icons/icon-arrow.svg" width="24" alt=""></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",  
  props:['post']
};
</script>

<style lang="scss" scoped>
.hero-section {
  .hero-section_inner-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    .hero-img-wrapper,
    .blog-hero-title {
      width: 100%;
    }

    .hero-img-wrapper {
      max-height: 515px;
      @media screen and(min-width: 300px) and (max-width: 480px) {
        max-height: 215px;
      }
      img {
        width:100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .blog-hero-title {
      background-color: #f8f7f3;
      max-height: 515px;
      padding-block: 135px;
      padding-inline: 15px;
      @media screen and(min-width: 300px) and (max-width: 480px) {
        padding-block: 50px;
        padding-inline: 25px;
      }
      .blog-hero-title_wrapper {
        width: 430px;
        max-width: 100%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;

        .sm-headline.caps {
          .categ {
            padding: 8px 15px;
            background: antiquewhite;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 12px;
            font-weight: 500;
            opacity: 0.8;
          }
        }      
        .hero-blog-title {
          font-size: 48px;
          font-family: "DM Serif Display";
          line-height: 1.2em;
          @media screen and(min-width: 300px) and (max-width: 700px) {
            font-size: 38px;
          }
        }
      }
    }
  }
}
</style>
