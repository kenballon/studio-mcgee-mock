<template lang="">
  <div class="hero-section">
    <div class="hero-section_inner-wrapper">
      <div class="hero-img-wrapper ">
        <img
          src="../assets/imgs-blog/Studio_McGee_Beck_Pines_hero.jpg"
          alt=""
        />
      </div>
      <div class="blog-hero-title ">
        <div class="blog-hero-title_wrapper">
          <div class="sm-headline caps">
            <span class="categ">Design Tips</span>
          </div>
          <h2>Choosing Your Upholstery Furniture Fabric</h2>
          <p>Some of our go-to material choices</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
  data() {
    return {
      testShow: true,
      heroBGImg: "@/assets/imgs-blog/Studio_McGee_Beck_Pines_hero.jpg",
    };
  },
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
      @media screen and(min-width: 300px) and (max-width: 700px) {
        max-height: 215px;
      }
      img {
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .blog-hero-title {
      background-color: #f8f7f3;
      max-height: 515px;
      .blog-hero-title_wrapper {
        width: 430px;
        max-width: 100%;
        margin-inline: auto;
        padding-block: 135px;
        padding-inline: 15px;
        display: flex;
        flex-direction: column;
        @media screen and(min-width: 300px) and (max-width: 700px) {
          padding-block: 50px;
          padding-inline: 25px;
        }
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
        h2 {
          font-size: 48px;
          font-family: "DM Serif Display";
          @media screen and(min-width: 300px) and (max-width: 700px) {
            font-size: 38px;
          }
        }
      }
    }
  }
}
</style>
