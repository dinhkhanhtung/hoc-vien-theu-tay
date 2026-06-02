const https = require('https');
const { execSync } = require('child_process');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_NAME = 'hoc-vien-theu-tay';

if (!GITHUB_TOKEN) {
  console.error('❌ Lỗi: Thiếu biến môi trường GITHUB_TOKEN. Vui lòng thiết lập biến môi trường.');
  process.exit(1);
}

// Helper function to make HTTP requests
function githubRequest(path, method, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'User-Agent': 'Node.js-GitHub-Deployer',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API request failed with status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function run() {
  try {
    console.log('1. Đang truy xuất thông tin tài khoản GitHub từ Token...');
    const user = await githubRequest('/user', 'GET');
    const username = user.login;
    console.log(`✓ Đã xác thực tài khoản GitHub: @${username} (Tên: ${user.name || 'N/A'})`);

    console.log(`2. Đang kiểm tra/tạo kho lưu trữ mới: "${REPO_NAME}" trên GitHub...`);
    try {
      await githubRequest('/user/repos', 'POST', {
        name: REPO_NAME,
        description: 'Học viện Thêu tay Truyền thống Việt Nam - Premium UI/UX Web App Prototype',
        private: false,
        has_issues: true,
        has_projects: true,
        has_wiki: true
      });
      console.log(`✓ Tạo kho lưu trữ "${REPO_NAME}" thành công.`);
    } catch (err) {
      if (err.message.includes('already exists')) {
        console.log(`! Kho lưu trữ "${REPO_NAME}" đã tồn tại. Sẽ tiến hành cập nhật code.`);
      } else {
        throw err;
      }
    }

    console.log('3. Khởi tạo Git cục bộ và đẩy mã nguồn lên GitHub...');
    
    // Reset git completely to clean up secret history in commits
    try {
      // Remove local .git directory safely based on platform (Windows PowerShell)
      try {
        execSync('rmdir /s /q .git');
      } catch (e) {
        execSync('rm -rf .git');
      }
      console.log('✓ Đã reset lịch sử Git cục bộ để xóa dấu vết Token.');
    } catch (e) {
      // ignore if .git directory not found or cannot be deleted easily
    }

    console.log('- Khởi tạo Git mới...');
    execSync('git init', { stdio: 'inherit' });

    // Set configuration for user email/name locally
    execSync('git config --local user.name "AI Designer"');
    execSync('git config --local user.email "designer@hocvientheutay.vn"');

    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "feat: init premium academy platform design and prototype v1.1"', { stdio: 'inherit' });
    execSync('git branch -M main', { stdio: 'inherit' });

    const remoteUrl = `https://${GITHUB_TOKEN}@github.com/${username}/${REPO_NAME}.git`;
    execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });

    console.log('4. Đang push mã nguồn lên nhánh "main" của GitHub...');
    execSync('git push -u origin main --force', { stdio: 'inherit' });
    console.log(`\n🎉 HOÀN THÀNH XUẤT SẮC!`);
    console.log(`Kho lưu trữ GitHub của bạn đã sẵn sàng tại:`);
    console.log(`👉 https://github.com/${username}/${REPO_NAME}`);
    console.log(`\nTrang web Prototype tương tác có thể chạy online qua GitHub Pages sau khi bật.`);

  } catch (error) {
    console.error('❌ Đã xảy ra lỗi trong quá trình triển khai:', error.message);
    process.exit(1);
  }
}

run();
