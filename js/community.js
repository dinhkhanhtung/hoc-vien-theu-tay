/* ----------------------------------------------------
   HỌC VIỆN THÊU TAY NGUYỄN THỊ HẰNG - CỘNG ĐỒNG HỌC VIÊN LOGIC
   ---------------------------------------------------- */

// Lưu bài viết cộng đồng trong localStorage để hiển thị đồng bộ giữa các trang
let communityPosts = JSON.parse(localStorage.getItem('community_posts'));

const defaultPosts = [
  {
    author: 'Nguyễn Thị Hằng',
    role: 'Nghệ nhân - Giảng viên',
    time: 'Ghim hôm nay',
    text: 'Chào cả lớp! Cô rất vui khi thấy mọi người học tập rất tích cực tuần này. Bài thực hành thêu hoa sen sắp tới các em chú ý cách xoắn chỉ tơ tằm nhẹ tay để tránh bị xước và xù. AI sẽ phân tích lỗi ngay khi các em nộp ảnh nhé! Cô tin các em sẽ làm tốt.',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&width=600&auto=format&fit=crop',
    tag: '#GópÝNghệNhân',
    reactions: { tinhTe: 45, kyCong: 38, sangTao: 25 },
    isPinned: true
  },
  {
    author: 'Trần Khánh Ly',
    role: 'Học viên khóa Trung cấp',
    time: '2 giờ trước',
    text: 'Thật tự hào khi hoàn thành xong tác phẩm chim hạc thêu chỉ vàng sau 3 tuần miệt mài dưới sự chỉ dẫn của cô Hằng. Điểm AI chấm đạt 92/100, cảm thấy tay nghề nâng cao rõ rệt! Mọi người cho mình xin thêm góp ý nhé.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&width=600&auto=format&fit=crop',
    tag: '#TácPhẩmMới',
    reactions: { tinhTe: 12, kyCong: 8, sangTao: 5 }
  },
  {
    author: 'Nguyễn Minh Thư',
    role: 'Học viên xuất sắc',
    time: '1 ngày trước',
    text: 'Chia sẻ với mọi người mẫu phác thảo tranh thêu cành cúc họa mi cô Hằng hướng dẫn hôm qua. Bạn nào cần file PDF vector có thể vào Thư viện tài nguyên tải nhé!',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&width=600&auto=format&fit=crop',
    tag: '#TácPhẩmMới',
    reactions: { tinhTe: 20, kyCong: 12, sangTao: 18 }
  }
];

if (!communityPosts || communityPosts.length === 0) {
  communityPosts = defaultPosts;
  localStorage.setItem('community_posts', JSON.stringify(communityPosts));
}

let hasPhotoAttachment = false;
let currentFilter = 'all';

function savePosts() {
  localStorage.setItem('community_posts', JSON.stringify(communityPosts));
}

function addPostPhoto() {
  hasPhotoAttachment = true;
  const indicator = document.getElementById('attached-photo-indicator');
  if (indicator) {
    indicator.style.display = 'block';
  }
}

function submitCommunityPost() {
  const textarea = document.getElementById('post-text-input');
  const tagSelect = document.getElementById('post-tag-select');
  
  if (!textarea || !textarea.value.trim()) {
    alert('Vui lòng nhập nội dung bài đăng.');
    return;
  }

  const selectedTag = tagSelect ? tagSelect.value : '#TácPhẩmMới';

  const newPost = {
    author: 'Nguyễn Minh Thư',
    role: 'Học viên xuất sắc',
    time: 'Vừa đăng',
    text: textarea.value,
    image: hasPhotoAttachment ? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&width=600&auto=format&fit=crop' : null,
    tag: selectedTag,
    reactions: { tinhTe: 1, kyCong: 1, sangTao: 0 }
  };

  communityPosts.unshift(newPost);
  savePosts();
  renderFeed();

  // Reset Form
  textarea.value = '';
  hasPhotoAttachment = false;
  const indicator = document.getElementById('attached-photo-indicator');
  if (indicator) indicator.style.display = 'none';
}

function reactPost(index, type) {
  // Tìm đúng bài viết trong mảng gốc dựa trên thuộc tính bài đăng hoặc thứ tự
  communityPosts[index].reactions[type]++;
  savePosts();
  renderFeed();
}

function filterFeed(tag, element) {
  currentFilter = tag;
  
  // Cập nhật trạng thái active cho nút lọc
  const buttons = document.querySelectorAll('.com-filter-bar button');
  buttons.forEach(btn => {
    btn.classList.remove('active-tag-filter');
    btn.style.background = 'transparent';
    btn.style.color = 'var(--color-charcoal)';
    btn.style.borderColor = 'var(--color-gold-light)';
  });
  
  if (element) {
    element.classList.add('active-tag-filter');
    element.style.background = 'var(--color-gold-light)';
    element.style.color = 'var(--color-charcoal)';
    element.style.borderColor = 'var(--color-gold-dark)';
  }
  
  renderFeed();
}

function renderFeed() {
  const container = document.getElementById('community-feed-container');
  if (!container) return;

  container.innerHTML = '';
  
  communityPosts.forEach((post, index) => {
    // Nếu đang áp dụng bộ lọc và bài viết không khớp tag thì bỏ qua (trừ các bài được ghim có thuộc tính isPinned)
    if (currentFilter !== 'all' && post.tag !== currentFilter && !post.isPinned) {
      return;
    }

    let imgHtml = '';
    if (post.image) {
      imgHtml = `
        <div class="com-artwork-frame">
          <img src="${post.image}" class="com-feed-image" alt="Tác phẩm thêu tay">
        </div>
      `;
    }

    let authorBadge = '';
    let avatarBorderColor = 'var(--color-gold-light)';
    
    if (post.role.includes('Nghệ nhân') || post.role.includes('Giảng viên')) {
      authorBadge = `<span class="role-badge teacher">Cô Hằng ★</span>`;
      avatarBorderColor = 'var(--color-emerald)';
    } else if (post.role.includes('Học viên xuất sắc')) {
      authorBadge = `<span class="role-badge stellar">Ưu tú</span>`;
      avatarBorderColor = 'var(--color-gold-dark)';
    } else {
      authorBadge = `<span class="role-badge member">Học viên</span>`;
      avatarBorderColor = 'var(--color-silk-dark)';
    }

    let tagHtml = `<span class="com-tag-badge">${post.tag || '#TácPhẩmMới'}</span>`;
    let pinnedHtml = post.isPinned ? `<span class="pinned-tag">📌 Đã ghim</span>` : '';

    container.innerHTML += `
      <div class="com-feed-item ${post.isPinned ? 'pinned-post' : ''}">
        <div class="com-feed-header">
          <div class="avatar" style="width:42px; height:42px; font-size:13px; border-color:${avatarBorderColor};">
            ${post.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
          </div>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div class="com-feed-author">${post.author}</div>
              ${authorBadge}
              ${pinnedHtml}
            </div>
            <div class="com-feed-time">${post.time}</div>
          </div>
          <div>
            ${tagHtml}
          </div>
        </div>
        <div class="com-feed-text">${post.text}</div>
        ${imgHtml}
        <div class="com-actions-bar">
          <button class="com-action-btn" onclick="reactPost(${index}, 'tinhTe')">🌸 Tinh tế (<span class="react-count">${post.reactions.tinhTe}</span>)</button>
          <button class="com-action-btn" onclick="reactPost(${index}, 'kyCong')">✨ Kỳ công (<span class="react-count">${post.reactions.kyCong}</span>)</button>
          <button class="com-action-btn" onclick="reactPost(${index}, 'sangTao')">🎨 Sáng tạo (<span class="react-count">${post.reactions.sangTao}</span>)</button>
        </div>
      </div>
    `;
  });
}

// Khởi chạy vẽ feed khi trang sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
});
