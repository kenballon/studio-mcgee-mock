<template lang="">
  <div class="hero-section">
    <div class="hero-section_inner-wrapper flex flex-wrap">
      <div class="hero-img-wrapper ">
        <img
          src="../assets/imgs-blog/Studio_McGee_Beck_Pines_hero.jpg"
          alt=""
        />
      </div>
      <div class="blog-hero-title ">
        <div class="blog-hero-title_wrapper">
          <div class="sm-headline caps">
            Design Tips
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
    };
  },
};
</script>
<style lang="scss" scoped>
.hero-section {
  max-height: 515px;
  .hero-section_inner-wrapper {
    width: 100%;
    height: 100%;

    .hero-img-wrapper,
    .blog-hero-title {
      width: 50%;
    }

    .hero-img-wrapper {
      max-height: 515px;
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
        .sm-headline.caps {
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 14px;
        }
        h2 {
          font-size: 48px;
          font-family: "DM Serif Display";
        }
      }
    }
  }
}
</style>
