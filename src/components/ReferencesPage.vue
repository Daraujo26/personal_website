<template>
  <div class="app">
    <div id="app-container" :class="{ 'app-container-shifted': isSidebarVisible }">
      <SideBar @toggleSidebar="toggleSidebar" />
      <div id="main-content">
        <div id="content-div">
          <h1 id="model-header">CS-UNet</h1>
          <p>References</p>

          <p id="references-text">
            [1] Hatamizadeh, A., Nath, V., Tang, Y., Yang, D., Roth, H. R., &amp;
            Xu, D. (2021). Swin UNETR: Swin transformers for semantic segmentation
            of brain tumors in MRI images. In&nbsp;
            <em>International MICCAI Brainlesion Workshop</em>
            &nbsp;(pp. 272-284). Cham: Springer International Publishing.&nbsp;
          </p>
          <p id="references-text">
            [2] Liu, J., Yang, H., Zhou, H. Y., Xi, Y., Yu, L., Yu, Y., ... &amp;
            Wang, S. (2024). Swin-UMamba: Mamba-based UNet with ImageNet-based
            pretraining.&nbsp;
            <em>arXiv preprint arXiv:2402.03302</em>.
          </p>
          <p id="references-text">
            [3] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L.,
            Gomez, A. N., ... &amp; Polosukhin, I. (2017). Attention is all you
            need.&nbsp;
            <em>Advances in Neural Information Processing Systems</em>
            <span>,&nbsp;</span>
            <em>30</em>.
          </p>
          <p id="references-text">
            [4] Gu, A., &amp; Dao, T. (2023). Mamba: Linear-time sequence modeling
            with selective state spaces.&nbsp;
            <em>arXiv preprint arXiv:2312.00752</em>.
          </p>
          <p id="references-text">
            [5] Zhao, Y., Li, J., Kumar, K., &amp; Gong, Y. (2017). Extended
            low-rank plus diagonal adaptation for deep and recurrent neural
            networks. In&nbsp;
            <em>
              2017 IEEE International Conference on Acoustics, Speech and Signal
              Processing (ICASSP)
            </em>
            &nbsp;(pp. 5040-5044). IEEE.&nbsp;
          </p>
          <p id="references-text">
            [6] Gu, A., Goel, K., &amp; Ré, C. (2021). Efficiently modeling long
            sequences with structured state spaces.&nbsp;
            <em>arXiv preprint arXiv:2111.00396</em>.
          </p>
          <p id="references-text">
            [7] He, K., Zhang, X., Ren, S., &amp; Sun, J. (2016). Deep residual
            learning for image recognition. In&nbsp;
            <em>
              Proceedings of the IEEE Conference on Computer Vision and Pattern
              Recognition
            </em>
            &nbsp;(pp. 770-778).&nbsp;
          </p>
          <p id="references-text">
            [8] Falk, T., Mai, D., Bensch, R., Çiçek, Ö., Abdulkadir, A.,
            Marrakchi, Y., ... &amp; Ronneberger, O. (2019). U-Net: deep learning
            for cell counting, detection, and morphometry.&nbsp;
            <em>Nature Methods</em>
            <span>,&nbsp;</span>
            <em>16</em>
            <span>(1), 67-70.&nbsp;</span>
          </p>
          <p id="references-text">
            [9] Bakas, S., Akbari, H., Sotiras, A., Bilello, M., Rozycki, M.,
            Kirby, J. S., ... &amp; Davatzikos, C. (2017). Advancing the cancer
            genome atlas glioma MRI collections with expert segmentation labels
            and radiomic features.&nbsp;
            <em>Scientific Data</em>
            <span>,&nbsp;</span>
            <em>4</em>
            <span>(1), 1-13.&nbsp;</span>
          </p>
          <p id="references-text">
            [10] Rogozhnikov, A. (2021). Einops: Clear and reliable tensor
            manipulations with Einstein-like notation. In&nbsp;
            <em>International Conference on Learning Representations</em>.
          </p>
          <p id="references-text">
            [11] Xing, Z., Ye, T., Yang, Y., Liu, G., &amp; Zhu, L. (2024).
            SegMamba: Long-range sequential modeling Mamba for 3d medical image
            segmentation.&nbsp;
            <em>arXiv preprint arXiv:2401.13560</em>.
          </p>
          <p>
            [12] Lee, H. H., Bao, S., Huo, Y., &amp; Landman, B. A. (2022). 3D
            UX-Net: a large kernel volumetric convnet modernizing hierarchical
            transformer for medical image segmentation.&nbsp;
            <em>arXiv preprint arXiv:2209.15076</em>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './side-bar/SideBar.vue'

export default {
    components: { SideBar },
    data() {
        return {
            isSidebarVisible: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
    },
}
</script>

<style>
#content-div {
    margin-top: 3%;
    margin-left: 0;
    margin-right: auto;
    max-width: 95%;
    animation: fadeInUp 1s ease-out forwards;
}

#model-header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh;
}

#references-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: clamp(22px, 2.5vw, 18px);
    margin-bottom: 1rem;
}
</style>