# Git Commands and Concepts

## Employee Information
- **Emp. ID of Technician**: 2611261 - Harsha
- **Emp. ID of Technician**: 2617428 - Arjun X

## Git Commands

1. `git add file.txt`
2. `git commit file.txt`
3. `git config --global user.username "<yourFullName>"`  
   `git config --global user.email "<yourEmail>"`
4. `git push origin pathOfGitHub`
5. `.git` denotes a git repository.
6. `git log` → can see project updates.
7. Git is a version control system, which means each update is called a version.
8. `git status` → shows the status of the current working directory.
9. `git commit --m "<Type your message here>"`
10. `pull/push` → server  
    `add/commit` → cache
11. `git branch` → similar to `pwd` (current working directory).
12. `git branch <branchName>` → creates a new branch.
13. `git checkout <branchName>` → switches between branches.
14. `git merge`
15. Eclipse Setup:
    1. File > New > Maven Project > Next > Next > GroupID (reverse domain name) > ArtifactID
16. Package name → `groupID.ArtifactID` → Example: `com.mphasis.MyDemoProject`
17. `git remote add origin`
18. Steps in Git Bash:
    1. `git init`
    2. `git status`
    3. `git add .`
    4. `git status`
    5. `git config --global user.name ""` # Username (First time)
    6. `git config --global user.email ""` # Email ID (First time)
    7. `git commit --m "Initial commit"`
    8. `git log`
    9. `git remote add origin ""` # Copy-paste the link of the repository (First time)
    10. `git push -u origin master`
19. `git rm -rf .........` → to delete files or directories.
20. `git commit --amend --author="<username> <yourmail>"` → to change the author’s email.
21. [Git User Manual](https://git-scm.com/docs/pretty-formats) → Git documentation.

---

# Database Constraints and Table Creation

1. `constraint dept_fk foreign key (dept_id) references department (dept_id));`  
   *(Column level constraint, added afterwards)*

2. ```sql
   CREATE TABLE FEE (
       empId Integer,
       fee Integer NOT NULL,
       constraint eid_fk foreign key (empId) references EMPLOYEEDETAILS (empId)
   );
3. CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255),
    AuthorID INT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID) ON DELETE CASCADE
);
