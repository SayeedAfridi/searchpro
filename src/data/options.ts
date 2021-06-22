export interface OptionType {
  name: string
  id: string
  categoryId: string
  query: string
}

const options: OptionType[] = [
  {
    name: 'Posting',
    id: 'phpbb-0',
    categoryId: 'forum-0',
    query: 'inurl:viewtopic.php?f=',
  },
  {
    name: 'Registration',
    id: 'phpbb-1',
    categoryId: 'forum-0',
    query: 'inurl:ucp.php?mode=register',
  },
  {
    name: 'Find Posting',
    id: 'vbf-0',
    categoryId: 'forum-1',
    query: 'inurl:showthread.php',
  },
  {
    name: 'Registration Link',
    id: 'vbf-1',
    categoryId: 'forum-1',
    query: 'inurl:register.php',
  },
  {
    name: 'Find Posting',
    id: 'mybb-0',
    categoryId: 'forum-2',
    query: 'inurl:showthread.php?tid=',
  },
  {
    name: 'Registration Link',
    id: 'mybb-2',
    categoryId: 'forum-2',
    query: 'inurl:member.php?action=register',
  },
  {
    name: 'Find Posting',
    id: 'vanilla-0',
    categoryId: 'forum-3',
    query: 'inurl:discussion',
  },
  {
    name: 'Registration Link',
    id: 'vanilla-1',
    categoryId: 'forum-3',
    query: 'inurl:register',
  },
  {
    name: 'Find Posting',
    id: 'exp-0',
    categoryId: 'forum-4',
    query: 'inurl:/viewthread/',
  },
  {
    name: 'Registration Link',
    id: 'exp-1',
    categoryId: 'forum-2',
    query: 'inurl:/register/',
  },
  {
    name: 'Find Posting',
    id: 'smf-0',
    categoryId: 'forum-5',
    query: 'inurl:index.php/topic',
  },
  {
    name: 'Registration Link',
    id: 'smf-1',
    categoryId: 'forum-5',
    query: 'inurl:action=register',
  },
  {
    name: 'Find Posting',
    id: 'smf-0',
    categoryId: 'forum-6',
    query: 'inurl:num=',
  },
  {
    name: 'Registration Link',
    id: 'smf-1',
    categoryId: 'forum-6',
    query: 'inurl:action=register',
  },
  {
    name: 'Find Blog Post',
    id: 'wpblog-0',
    categoryId: 'blog-0',
    query: '"leave a comment" "You may use these HTML tags and attributes:"',
  },
  {
    name: 'Find Blog',
    id: 'blogpost-0',
    categoryId: 'blog-1',
    query: '"Post a Comment" "Notify me"',
  },
  {
    name: 'Find Blog',
    id: 'drupal-0',
    categoryId: 'blog-2',
    query: '"add new comment" "Your name" "Comment"',
  },
  {
    name: 'Find Website',
    id: 'blogengine-0',
    categoryId: 'blog-3',
    query: '"post a comment" "You may use these HTML tags and attributes:"',
  },
  {
    name: 'Find Post',
    id: 'movable-0',
    categoryId: 'blog-4',
    query: '"Sign in to comment" "Leave a Comment" "Remember personal info?"',
  },
  {
    name: 'Find Blog Post',
    id: 'mephist-0',
    categoryId: 'blog-5',
    query: '"Leave a response" "Comments"',
  },
  {
    name: 'Find Blog',
    id: 's9y-0',
    categoryId: 'blog-6',
    query: '"Display comments as"',
  },
  {
    name: 'Find Blog Post',
    id: 'subtext-0',
    categoryId: 'blog-7',
    query: '"title" "name" "url"',
  },
  {
    name: 'Find Blog',
    id: 'seren-0',
    categoryId: 'blog-8',
    query: '"Remember Information?" "Add Comment"',
  },
  {
    name: 'Find Blog Post',
    id: 'lifetype-0',
    categoryId: 'blog-9',
    query: '"Add comment" "Your personal" "Topic" "Text (Required)"',
  },
  {
    name: 'Find Blog',
    id: 'dotclear-0',
    categoryId: 'blog-10',
    query: '"Name" "Web page"',
  },
  {
    name: 'Find Directory',
    id: 'phpLD-0',
    categoryId: 'dir-0',
    query: '"Submit" "latest"',
  },
  {
    name: 'Find Website',
    id: 'linkex-0',
    categoryId: 'dir-1',
    query:
      '"Submit your website" "Step 1: Add our link to your website" "Step 2: Submit your link"',
  },
  {
    name: 'Find Directory',
    id: 'phpLinkD-0',
    categoryId: 'dir-2',
    query: '"submit"',
  },
  {
    name: 'Find Directory',
    id: 'esyndicat-0',
    categoryId: 'dir-3',
    query: '"Total number of links"',
  },
  {
    name: 'Find Directory',
    id: 'freed-0',
    categoryId: 'dir-4',
    query: 'inurl:"/cgi-bin/addurl.cgi"',
  },
  {
    name: 'Find Directory',
    id: 'alld-0',
    categoryId: 'art-0',
    query: 'intitle:"Article Directory"',
  },
  {
    name: 'Find Directory',
    id: 'phpldart-0',
    categoryId: 'art-1',
    query: '"Add Article"',
  },
  {
    name: 'Find Directory',
    id: 'artms-0',
    categoryId: 'art-2',
    query: '"Welcome Guest" "Categories"',
  },
  {
    name: 'Find Directory',
    id: 'phplinkdart-0',
    categoryId: 'art-3',
    query: '"Add Article"',
  },
  {
    name: 'Find Blog Site',
    id: 'vbullblogart-0',
    categoryId: 'art-4',
    query: 'inurl:blog "Create Blog"',
  },
  {
    name: 'Find Directory',
    id: 'artdash-0',
    categoryId: 'art-5',
    query: '"Print This Article" "Add To Favorites" "Email to Friends"',
  },
  {
    name: 'Find Pligg Site',
    id: 'pligg-0',
    categoryId: 'sclb-0',
    query: '"Published News" "Upcoming News" "Submit a New Story"',
  },
  {
    name: 'Find Website',
    id: 'phpdug-0',
    categoryId: 'sclb-1',
    query: '"dig it" "submitted by *"',
  },
  {
    name: 'Find Scuttle Site',
    id: 'scuttle-0',
    categoryId: 'sclb-2',
    query: '"Recent bookmarks"  "Sort by:" "register" "about"',
  },
  {
    name: 'Find Scoops Site',
    id: 'scoops-0',
    categoryId: 'sclb-3',
    query: '"published" "upcoming" "archived"',
  },
  {
    name: 'Find Website',
    id: 'otherall-0',
    categoryId: 'sclb-4',
    query: '"submit" "Posted by"',
  },
  {
    name: 'Find Contributor Site',
    id: 'contrib-0',
    categoryId: 'guest-0',
    query: 'OR "Add Content" OR "Become a contributor"',
  },
  {
    name: 'Find Author Post',
    id: 'author-0',
    categoryId: 'guest-1',
    query: '"this is a guest post by" OR "contributing writer"',
  },
  {
    name: 'Find Blog Post',
    id: 'blgpost-0',
    categoryId: 'guest-2',
    query: 'OR "contribute to our site"',
  },
  {
    name: 'Find Website',
    id: 'authorwanted-0',
    categoryId: 'guest-3',
    query: 'OR "guest poster wanted" OR "guest posts wanted"',
  },
  {
    name: 'Find Pages',
    id: 'postguide-0',
    categoryId: 'guest-4',
    query: 'OR "contributor guidelines"',
  },
  {
    name: 'Find Blog',
    id: 'submitbpost-0',
    categoryId: 'guest-5',
    query:
      'OR "submit blog post" OR "submit your content" OR "submit guest post"',
  },
  {
    name: 'Find Website',
    id: 'blogcat-0',
    categoryId: 'guest-6',
    query: '"Submit" OR "Contribute"',
  },
  {
    name: 'Find Those Sites',
    id: 'myguestblog-0',
    categoryId: 'guest-7',
    query:
      'OR "my guest blogs" OR "posts on other blogs" OR "I\'ve been featured on"',
  },
  {
    name: 'Find Profile Sites',
    id: 'angelaeback-0',
    categoryId: 'bonus-0',
    query: 'intext:angelae8654',
  },
  {
    name: 'Find Lens',
    id: 'squidoo-0',
    categoryId: 'bonus-1',
    query:
      '"No HTML is allowed in comments, but URLs will be hyperlinked"  -"No comments"',
  },
  {
    name: 'Search Blogs',
    id: 'intense-0',
    categoryId: 'bonus-2',
    query:
      '"if you have a website, link to it here" "post a new comment" -"There are no comments posted yet. Be the first one!"',
  },
  {
    name: 'Find Dofollow Site',
    id: 'commentluv-0',
    categoryId: 'bonus-3',
    query:
      '"The version of CommentLuv on this site is no longer supported." "This blog uses premium CommentLuv which allows you"',
  },
  {
    name: 'Find Disqus Blog',
    id: 'disqus-0',
    categoryId: 'bonus-4',
    query: '"Sort by Best" "Add Disqus to your site" "Privacy"',
  },
  {
    name: 'Find All Blogs',
    id: 'keywordluv-0',
    categoryId: 'bonus-5',
    query:
      '"This site uses KeywordLuv. Enter YourName@YourKeywords in the Name field to take advantage."',
  },
  {
    name: 'Find Website',
    id: 'livefyre-0',
    categoryId: 'bonus-6',
    query: '"comment help" -"Comments have been disabled for this post"',
  },
  {
    name: 'Wordpress Site',
    id: 'blgcmnt-0',
    categoryId: 'edu-0',
    query:
      '"powered by wordpress" "leave a comment" "You may use these HTML tags and attributes:"',
  },
  {
    name: 'Movable Type',
    id: 'blgcmnt-1',
    categoryId: 'edu-0',
    query:
      '"Powered by Movable Type"  -"Sign in to comment" "Leave a Comment" "Remember personal info?"',
  },
  {
    name: 'Drupal Blog',
    id: 'blgcmnt-2',
    categoryId: 'edu-0',
    query: '"Powered by Drupal" "add new comment" "Your name" "Comment"',
  },
  {
    name: 'Common Blogs',
    id: 'blgcmnt-3',
    categoryId: 'edu-0',
    query: '"Post Comment" OR "Add Comment" "website" "Name"',
  },
  {
    name: 'phpBB Forum',
    id: 'forumposting-0',
    categoryId: 'edu-1',
    query: '"powered by phpbb" inurl:viewtopic.php?f=',
  },
  {
    name: 'vBulletin Forum',
    id: 'forumposting-1',
    categoryId: 'edu-1',
    query: '"powered by vBulletin" inurl:showthread.php',
  },
  {
    name: 'SMF Forum',
    id: 'forumposting-2',
    categoryId: 'edu-1',
    query: '"powered by SMF" inurl:index.php/topic',
  },
  {
    name: 'YaBB Forum',
    id: 'forumposting-3',
    categoryId: 'edu-1',
    query: '"powered by YaBB" inurl:num=',
  },
  {
    name: 'Find Pages',
    id: 'scholarship-0',
    categoryId: 'edu-2',
    query:
      '"scholarships" OR "college scholarships" OR "Outside Agency Scholarships" OR "scholarships links"',
  },
  {
    name: 'Find Resources Pages',
    id: 'resource-0',
    categoryId: 'edu-3',
    query: 'inurl:resources OR inurl:links',
  },
  {
    name: 'Find Contributor',
    id: 'contributor-0',
    categoryId: 'edu-4',
    query: '"Contribute to this site" OR "Become a contributor"',
  },
  {
    name: 'phpBB Forum',
    id: 'govforum-0',
    categoryId: 'gov-0',
    query: '"powered by phpbb" inurl:viewtopic.php?f=',
  },
  {
    name: 'vBulletin Forum',
    id: 'govforum-1',
    categoryId: 'gov-0',
    query: '"powered by vBulletin" inurl:showthread.php',
  },
  {
    name: 'SMF Forum',
    id: 'govforum-2',
    categoryId: 'gov-0',
    query: '"powered by SMF" inurl:index.php/topic',
  },
  {
    name: 'YaBB Forum',
    id: 'govforum-3',
    categoryId: 'gov-0',
    query: '"powered by YaBB" inurl:num=',
  },
  {
    name: 'Wordpress Site',
    id: 'govblogcomnt-0',
    categoryId: 'gov-1',
    query:
      '"powered by wordpress" "leave a comment" "You may use these HTML tags and attributes:"',
  },
  {
    name: 'Drupal Blog',
    id: 'govblogcomnt-1',
    categoryId: 'gov-1',
    query: '"Powered by Drupal" "add new comment" "Your name" "Comment"',
  },
  {
    name: 'Common Blogs',
    id: 'govblogcomnt-2',
    categoryId: 'gov-1',
    query: '"Post Comment" OR "Add Comment" "website" "Name"',
  },
  {
    name: 'Find Website',
    id: 'govresource-0',
    categoryId: 'gov-2',
    query: 'inurl:resources OR inurl:links',
  },
  {
    name: 'Find Website',
    id: 'govcontrib-0',
    categoryId: 'gov-3',
    query: '"Contribute to this site" OR "Become a contributor"',
  },
]

export default options
