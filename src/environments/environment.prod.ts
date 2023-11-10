declare var apiConfig: any;
export const environment = {
  production: true,
  title: 'personalBlog-Production',
  personalBlogApiBaseUrl: 'http://localhost:1010/personalBlog',
  uiTemplateBaseUrl: document.getElementsByTagName('base')[0].href + '/resources/static/src/assets',
};
