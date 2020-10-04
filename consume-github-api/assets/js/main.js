var ENDPOINT_GITHUB_USER = "https://api.github.com/users/";
var REPOS = "/repos";
var STARRED = '/starred';

$('#form-search-user').submit(function(e) {

    showLoader();
	e.preventDefault();
    var userSearch = $('#user-search').val();
    
    getUserGitHub(userSearch);
    getRepoGitHub(userSearch); 
    getStarred(userSearch);

    $('#search').css('padding-top', '35px');
    $('#github-search').addClass('col-lg-4');
    $('#github-search').css('font-size', '40px');
    $('#search-bar').addClass('col-lg-8 px-lg-0');

    $('#repos').empty();

});

$('#github-search').click(function(){
    $('#result').hide();
    $('#search').show();
    $('#search').css('padding-top', '244px');
    $('#github-search').removeClass('col-lg-4');
    $('#search-bar').removeClass('col-lg-8 px-lg-0');
    $('#user-search').val("");
    $('#user-search').focus();
    if($(window).width() > 767) {
        $('#github-search').css('font-size', '60px');
    }

});

function getUserGitHub(user) {
    $.ajax({
        'url': ENDPOINT_GITHUB_USER + user,
        'type': 'get',
        success: function(data) {
            hideLoader();
            $('#result').show();
            $('#result-found').show();
            $('#result-not-found').hide();

            data.name === null ? data.name = data.login : data.name;
            data.login === null ? data.login = 'N/A' : data.login;
            data.bio === null ? data.bio = 'N/A' : data.bio;
            data.email === null ? data.email = 'N/A' : data.email;
            data.company === null ? data.company = 'N/A' : data.company;
            data.location === null ? data.location = 'N/A' : data.location;

            $('#user-avatar').attr("src", data.avatar_url);
            $('#user-name').text(data.name);
            $('#user-login').text(data.login);
            $('#user-email').text(data.email);
            $('#user-bio').text(data.bio);
            $('#user-organization-name').text(data.company);
            $('#user-location-name').text(data.location);
            $('#user-repositories-count').text(data.public_repos);
            $('#user-followers-count').text(data.followers);
            $('#user-following-count').text(data.following);
        },

        error: function(data) {
            hideLoader();
            $('#result').show();
            $('#result-found').hide();
            $('#result-not-found').show();
            console.log('Erro ao chamar dados do usuário')
		}
    });
}

function getRepoGitHub(user) {
    $.ajax({
        'url': ENDPOINT_GITHUB_USER + user + REPOS,
        'type': 'get',

        success: function(data){

            data = sortByStargazers(data);

            if(data.length === 0) {
                $('#repos').append(
                    '<p class="repo-not-found">Este usuário não possui repositórios</p>'
                )
            } else {
                for(var i = 0; i < data.length; i++){
                    var dataDescripton = data[i].description === null ? 'N/A' : data[i].description;
                    $('#repos').append(
                        '<div class="repo">'+
                            '<h3 id="repo-name">'+data[i].name+'</h3>'+
                            '<p id="repo-description">'+dataDescripton+'</p>'+
                            '<div class="user-star d-flex align-items-center">'+
                                '<img loading="lazy" class="user-star-icon" src="assets/img/icons/star-icon.svg" alt="Estrelas do repositório">'+
                                '<span id="user-star-count">'+data[i].stargazers_count+'</span>'+
                            '</div>'+
                        '</div>'
                    );
                }
            }
        },

        error: function(data){
            console.log('Erro ao chamar repositórios do usuário')
		}
    });
}

function getStarred(user) {
    $.ajax({
        url: ENDPOINT_GITHUB_USER + user + STARRED,
        type: 'get',
        success: function(data){
            $('#user-star-count').text(data.length);
        },

        error: function(data) {
            console.log('Erro ao chamar repositórios estrelados do usuário')
        }
    });
}

function sortByStargazers(data) {
    var objTmp = Object.assign([], data)
    
    objTmp.sort(function(a, b) {
        return b.stargazers_count - a.stargazers_count;
    });
    
    return objTmp;
}

function showLoader() {
	$('body').append(
		'<div class="loader d-flex align-items-center justify-content-center" id="loader">'+
		'	<div class="opacity-area"></div>'+
		'	<div>'+
		'		<div class="spinner-grow text-primary" role="status">'+
		'			<span class="sr-only">Loading...</span>'+
		'		</div>'+
		'		<div class="spinner-grow text-danger" role="status">'+
		'			<span class="sr-only">Loading...</span>'+
		'		</div>'+
		'		<div class="spinner-grow text-success" role="status">'+
		'			<span class="sr-only">Loading...</span>'+
		'		</div>'+
		'		<div class="spinner-grow text-warning" role="status">'+
		'			<span class="sr-only">Loading...</span>'+
		'		</div>'+
		'	</div>'+
		'</div>'
	);
}

function hideLoader() {
	$('#loader').remove();
}