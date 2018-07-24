<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox">
        <div class="ibox-content">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center m-t-lg">
                <div class="VueToNuxtLogo">
                  <div class="Triangle Triangle--two"></div>
                  <div class="Triangle Triangle--one"></div>
                  <div class="Triangle Triangle--three"></div>
                  <div class="Triangle Triangle--four"></div>
                </div>
              </div>
              <div class="text-center m-t-lg">
                <h1>Inspinia <span class="text-navy"> <br>NuxtJs</span></h1>
                <small>Supported NuxtJs version</small>
              </div>
              <div>
                <div class="hr-line-dashed"></div>
                <div class="text-center p-m">
                  <p>
                    <strong>Inspinia <span class="text-navy">NuxtJs</span></strong> is supported NuxtJs version of
                    INSPINIA theme.<br>
                    This version contains a number of controllers and directives written specifically to support angular
                    framework.
                    <br>
                    <strong>NuxtJs version is writen with Opinionated NuxtJs styleguide for teams</strong>.
                    (https://github.com/kronhyx/inspinia/branch/nuxt).
                    <br>
                    In project folder you find also <strong class="text-navy">pages</strong>
                    It is an application skeleton for a typical NuxtJs web app. You can use it to quickly bootstrap your
                    nuxt webapp projects and dev environment for these projects.
                  </p>

                  <p class="text-center m-t-md">
                    <nuxt-link target="_blank" :to="path('index')" class="btn btn-primary">
                      Live NuxtJs version
                    </nuxt-link>
                  </p>
                </div>
                <div>
                  <div class="text-center">
                    <small>If you need any help feel free to write to us on kronhyx@gmail.com.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'package',
    head() {
      return {
        title: 'Package'
      }
    }
  }
</script>

<style scoped>
  .VueToNuxtLogo {
    display: inline-block;
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
    position: relative;
    overflow: hidden;
    height: 180px;
    width: 245px;
  }

  .Triangle {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  .Triangle--one {
    border-left: 105px solid transparent;
    border-right: 105px solid transparent;
    border-bottom: 180px solid #41B883;
  }

  .Triangle--two {
    top: 30px;
    left: 35px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 88px solid transparent;
    border-right: 88px solid transparent;
    border-bottom: 150px solid #3B8070;
  }

  .Triangle--three {
    top: 60px;
    left: 35px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid #35495E;
  }

  .Triangle--four {
    top: 120px;
    left: 70px;
    animation: godown 0.5s linear forwards 3s;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 60px solid #fff;
  }

  @keyframes turn {
    100% {
      transform: rotateX(0deg);
    }
  }

  @keyframes godown {
    100% {
      top: 180px;
    }
  }

  @keyframes goright {
    100% {
      left: 70px;
    }
  }
</style>