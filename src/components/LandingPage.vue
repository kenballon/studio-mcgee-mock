<template>
  <main>
    <section>
      <Hero :post="heroSection" />
    </section>
    <section class="latest-blog-section">
      <LatestBlog />
    </section>
  </main>
</template>

<script>
import Hero from "./HeroSection";
import LatestBlog from "./LatestBlogSection";
export default {
  name: "LandingPage",
  components: { Hero,LatestBlog },
  data() {
    return {
      heroSection: {
        blogCategory: "design tips",
        blogTitle: "Choosing Your Upholstery Furniture Fabric",
        blogShortDesc: "Some of our go-to material choices",
        blogCoverPhoto: "Studio_McGee_Beck_Pines_hero",
        featuredPost: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }

.latest-blog-section{
  margin-bottom: 50px;
}
</style>
