# 🚀 Deployment Guide

This guide covers deploying the Generative Video Pipeline Dashboard to various platforms.

## Vercel Deployment (Recommended)

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/generative-video-pipeline)

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support
- Static asset caching (1 year)

## Netlify Deployment

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy via Git**:
   - Connect your repository
   - Set build settings
   - Deploy automatically on push

3. **Manual Deploy**:
   ```bash
   npm run build
   npx netlify deploy --prod --dir=dist
   ```

## GitHub Pages

1. **Build and Deploy**:
   ```bash
   npm run build
   npm install -g gh-pages
   gh-pages -d dist
   ```

2. **GitHub Actions** (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/nginx.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t generative-video-pipeline .
   docker run -p 80:80 generative-video-pipeline
   ```

## Environment Variables

For production deployments, you may need to set:

```bash
# API endpoints (when backend is integrated)
VITE_API_BASE_URL=https://api.your-domain.com
VITE_WEBSOCKET_URL=wss://ws.your-domain.com

# Analytics (optional)
VITE_ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

### Build Optimization
- Bundle analysis: `npm run build:analyze`
- Tree shaking enabled
- Code splitting configured
- Asset optimization

### CDN Configuration
- Static assets cached for 1 year
- Gzip compression enabled
- HTTP/2 push for critical resources

### Monitoring
- Core Web Vitals tracking
- Error boundary reporting
- Performance metrics collection

## Security Considerations

- HTTPS enforced
- Content Security Policy headers
- XSS protection enabled
- Secure headers configuration

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall
   - Verify TypeScript compilation

2. **Routing Issues**:
   - Ensure SPA fallback is configured
   - Check vercel.json rewrites
   - Verify base URL configuration

3. **Asset Loading**:
   - Check public folder structure
   - Verify asset paths
   - Ensure proper MIME types

### Support

For deployment issues:
1. Check the deployment logs
2. Verify build configuration
3. Test locally with `npm run preview`
4. Contact support with error details