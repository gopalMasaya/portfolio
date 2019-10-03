
function myProjects(){

  links[0] = createA('https://www.youtube.com/watch?v=x3w9Vqu9iuY&t=10s',target='פרוייקט אומנות',"_blank");
	links[0].position(580,190);
	links[0].style('font-size','20px')
	links[1] = createImg('https://i.ytimg.com/vi/x3w9Vqu9iuY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD-0y35lye4l46i1fHsxFR4qcM58A');
	links[1].position(500,220);
  links[1].size(240,160)

  links[2] = createA('https://www.youtube.com/watch?v=gbvlIzflGs4',target='מכונה לפיסול רנדומלי-פרוייקט אומנות',"_blank");
	links[2].position(490,470);
  links[2].style('font-size','20px')
  links[3] = createImg('https://i.ytimg.com/vi/gbvlIzflGs4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAbjAQxQxfZjbTQNlEsMuSvjQLnDQ');
	links[3].position(500,500);
  links[3].size(240,160)
// 190/220   470/500   810/780
  links[4] = createA('https://www.youtube.com/watch?v=gbvlIzflGs4',target='רובוט לחממה POC','_blank');
	links[4].position(580,780);
  links[4].style('font-size','20px')
  links[5] = createImg('https://i.ytimg.com/vi/GVQxNtpRzug/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLArlUo-SjRmPclIx55EGfsnyHj9BQ');
  links[5].position(500,810);
  links[5].size(240,160)
for(let i=0;i<6;i++){
 links[i].class('page1')
}

	on[0] = true;
}
