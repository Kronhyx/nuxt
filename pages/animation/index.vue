<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5>CSS Animations
              <small>http://daneden.github.io/animate.css/</small>
            </h5>
            <div class="ibox-tools">
              <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
              </a>
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fa fa-wrench"></i>
              </a>
              <ul class="dropdown-menu dropdown-user">
                <li><a href="#">Config option 1</a>
                </li>
                <li><a href="#">Config option 2</a>
                </li>
              </ul>
              <a class="close-link">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
          <div class="ibox-content text-center css-animation-box">
            <h1 class="text-navy">
              Animation.css
            </h1>
            <p>
              A cross-browser library of CSS animations. Animation.css is a bunch of cool, fun, and cross-browser
              animations for you to use in your projects. Great for emphasis, home pages, sliders, and general
              just-add-water-awesomeness.
            </p>

            <div class="hr-line-dashed"></div>

            <div class="row">
              <div class="col-sm-6 text-center">

                <h4 class="m-b-lg">
                  Example box for animation effect <i>{{selected}}</i>.
                </h4>

                <div id="animation_box" class="animated" :class="selected">
                  <p class="animation-text-info">
                    This is simple example of Rickshaw charts. You can use animation on any objects: text, charts,
                    images, tables etc.
                  </p>
                  <div class="text-center wrapper-content animation-text-box">
                    <h2>48%</h2>
                    <p>Sales marketing</p>
                  </div>
                  <div id="rickshaw_multi" class="rickshaw_graph">
                    <svg width="625" height="250">
                      <g>
                        <path
                          d="M0,230.1980198019802Q135.41666666666669,204.45544554455444,156.25,200.4950495049505C187.5,194.55445544554453,281.25,169.80198019801978,312.5,170.79207920792078S437.5,210.3960396039604,468.75,210.3960396039604Q489.5833333333333,210.3960396039604,625,170.79207920792078L625,250Q489.5833333333333,250,468.75,250C437.5,250,343.75,250,312.5,250S187.5,250,156.25,250Q135.41666666666669,250,0,250Z"
                          class="area" fill="#1ab394"></path>
                        <path
                          d="M0,230.1980198019802Q135.41666666666669,204.45544554455444,156.25,200.4950495049505C187.5,194.55445544554453,281.25,169.80198019801978,312.5,170.79207920792078S437.5,210.3960396039604,468.75,210.3960396039604Q489.5833333333333,210.3960396039604,625,170.79207920792078"
                          class="line" fill="none" stroke="#17997f" stroke-width="2"></path>
                      </g>
                      <g>
                        <path
                          d="M0,101.48514851485149Q135.41666666666669,58.58085808580857,156.25,51.980198019801975C187.5,42.07920792079208,281.25,-1.4851485148514705,312.5,2.47524752475249S437.5,84.65346534653466,468.75,91.58415841584159Q489.5833333333333,96.20462046204621,625,71.78217821782178L625,170.79207920792078Q489.5833333333333,210.3960396039604,468.75,210.3960396039604C437.5,210.3960396039604,343.75,171.78217821782178,312.5,170.79207920792078S187.5,194.55445544554453,156.25,200.4950495049505Q135.41666666666669,204.45544554455444,0,230.1980198019802Z"
                          class="area" fill="#eeeeee"></path>
                        <path
                          d="M0,101.48514851485149Q135.41666666666669,58.58085808580857,156.25,51.980198019801975C187.5,42.07920792079208,281.25,-1.4851485148514705,312.5,2.47524752475249S437.5,84.65346534653466,468.75,91.58415841584159Q489.5833333333333,96.20462046204621,625,71.78217821782178"
                          class="line" fill="none" stroke="#d7d7d7" stroke-width="2"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 animation-efect-links text-center">
                <h4 class="m-b-lg">
                  Use any animation button to turn on the animation on box example.
                </h4>
                <a class="btn btn-white" v-for="(effect,key) in effects" :key="key" @click="selected=effect">
                  {{ effect }}
                </a>
                &nbsp;
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
    name: 'animation-index',
    data() {
      return {
        effects: [
          'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft',
          'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
          'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig',
          'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
          'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flip', 'flipInX', 'flipInY', 'flipOutX',
          'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight',
          'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft',
          'rotateOutUpRight', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideOutLeft', 'slideOutRight', 'slideOutUp',
          'hinge', 'rollIn', 'rollOut'
        ],
        selected: null
      }
    }
  }
</script>

<style scoped>

</style>