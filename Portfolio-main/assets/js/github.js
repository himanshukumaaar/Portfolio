document.addEventListener('DOMContentLoaded', () => {
  const username = 'himanshukumaaar';
  const grid = document.getElementById('github-repos-grid');
  
  if (!grid) return;

  async function fetchGitHubRepos() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const repos = await response.json();
      displayRepos(repos);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      grid.innerHTML = `
        <div class="repos-loading">
          <p><i class="fas fa-exclamation-triangle"></i> Failed to load repositories. Please visit GitHub directly.</p>
        </div>
      `;
    }
  }

  function displayRepos(repos) {
    grid.innerHTML = ''; // Clear loading
    
    if (repos.length === 0) {
      grid.innerHTML = `
        <div class="repos-loading">
          <p>No public repositories found.</p>
        </div>
      `;
      return;
    }

    // Filter out forks if desired, or just show top 6 updated
    const displayList = repos.filter(repo => !repo.fork).slice(0, 6);

    displayList.forEach(repo => {
      const card = document.createElement('a');
      card.href = repo.html_url;
      card.target = '_blank';
      card.className = 'github-repo-card glass-card';
      
      const language = repo.language ? repo.language : 'Unknown';
      const description = repo.description ? repo.description : 'No description provided';
      
      card.innerHTML = `
        <h3><i class="fas fa-book-journal-whills"></i> ${repo.name}</h3>
        <p>${description}</p>
        <div class="github-repo-meta">
          <span class="repo-lang"><i class="fas fa-circle" style="font-size: 1rem;"></i> ${language}</span>
          <span class="repo-stars"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
          <span class="repo-forks"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
        </div>
      `;
      
      grid.appendChild(card);
    });
  }

  fetchGitHubRepos();
});
