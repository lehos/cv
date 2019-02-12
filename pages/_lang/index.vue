<script>
export default {
  data() {
    return {
      skills: this.$t('skills'),
      jobs: this.$t('jobs')
    }
  },
}
</script>

<template>
  <div class="cv-wrap">
    <aside class="cv-aside">
      <div class="cv-face">
        <img src="~/assets/face.jpg" alt="" width="230px"/>
      </div>

      <ul class="cv-contacts">
        <li>
          <span class="cv-contacts__label">email:</span>
          <a href="mailto:alexey.stratan@gmail.com">alexey.stratan@gmail.com</a>
        </li>

        <li>
          <span class="cv-contacts__label">skype:</span>
          <a href="skype:alexey-stratan?chat">alexey-stratan</a>
        </li>

        <li>
          <span class="cv-contacts__label">github:</span>
          <a href="http://github.com/lehos">lehos</a>
        </li>
        <li>
          <span class="cv-contacts__label">socials:</span>
          <a href="https://www.linkedin.com/in/aleksei-stratan-46190674/">linkedin</a>
          <a href="http://vk.com/fake_lehos">vk</a>
          <a href="https://www.facebook.com/true.lehos">fb</a>
        </li>
      </ul>
    </aside>

    <h2>{{$t('about.header')}}</h2>
    <p>{{$t('about.text')}}</p>

    <h2>{{$t('skills-header')}}</h2>
    <ul>
      <li v-for="(skill, index) in skills" :key="`skill${index}`">
        {{skill}}
      </li>
    </ul>

    <h2>{{$t('jobs-header')}}</h2>
    <div class="job" v-for="(job, index) in jobs" :key="`job${index}`">
      <div class="job-date">{{job.date}}</div>
      <div class="job-company" v-html="job.company"></div>
      <div class="job-position">{{job.position}}</div>
      <ul class="job-desc">
        <li v-for="(desc, index) in job.desc" :key="`desc${index}`" v-html="desc"></li>
      </ul>
      <div class="job-stack">
        {{job.stack}}
      </div>
    </div>
  </div>
</template>
