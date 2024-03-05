import React from "react";

function LogoDesktop() {
	return (
		//   <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="555" height="80" fill="none">
		//       <title id="page_title">Jessica Louvel</title>
		//       <g fill="#1E2632" clipPath="url(#a)">
		//     <path d="M27.725 5.78c.672-.23 1.198-.399 1.618-.546.4-.147.715-.19.946-.105.231.084.378.315.441.714.064.4.105 1.051.105 1.934v8.26L30.73 61.63c0 3.447-.399 6.348-1.156 8.702-.777 2.354-1.85 4.246-3.237 5.675-1.366 1.43-3.047 2.46-5.002 3.09-1.955.63-4.12.925-6.474.925-1.976 0-3.847-.336-5.612-.988-1.766-.651-3.343-1.534-4.73-2.648-1.387-1.093-2.501-2.397-3.3-3.847C.42 71.067 0 69.532 0 67.914c0-1.913.568-3.426 1.703-4.561 1.135-1.135 2.669-1.703 4.56-1.703 1.178 0 2.145.315 2.922.946a4.389 4.389 0 011.535 2.375c.252.946.231 1.934-.063 2.964-.294 1.03-.925 1.976-1.87 2.858-.884.8-1.367 1.661-1.493 2.586-.126.925.105 1.765.651 2.543.547.778 1.409 1.43 2.586 1.976 1.177.547 2.606.82 4.288.82 1.534 0 2.67-.526 3.363-1.535.694-1.009 1.198-2.375 1.492-4.014.294-1.66.42-3.49.378-5.507a288.375 288.375 0 01-.063-6.012V16.017c0-.441-.105-.84-.336-1.22a5.04 5.04 0 00-.777-.987c-.295-.295-.673-.547-1.094-.778-.588-.294-1.03-.63-1.324-.988-.21-.357-.294-.736-.21-1.093.063-.357.589-.777 1.534-1.219 2.144-1.03 4.183-1.913 6.16-2.648 1.975-.736 3.215-1.177 3.72-1.325l.063.021zm49.9 34.157c0 2.88-.526 5.255-1.535 7.168-1.03 1.912-2.354 3.447-3.972 4.582a17.265 17.265 0 01-5.444 2.543c-2.018.547-4.015.946-5.991 1.156-1.976.21-3.847.316-5.612.273a188.341 188.341 0 00-4.288-.063c0 2.144.126 4.436.378 6.895a29.46 29.46 0 001.535 6.894c.777 2.123 1.807 3.91 3.132 5.297 1.324 1.387 3.047 2.102 5.17 2.102 2.859 0 5.234-.42 7.105-1.261 1.87-.84 3.363-1.913 4.456-3.195 1.093-1.282 1.892-2.67 2.375-4.183.484-1.513.715-2.964.715-4.351 0-.504.294-.778.883-.778.504 0 .777.253.777.778 0 2.564-.441 4.856-1.324 6.873-.883 2.018-2.06 3.72-3.531 5.108a14.413 14.413 0 01-5.17 3.132c-1.977.715-4.12 1.072-6.39 1.072-3.826.063-7.042-.63-9.69-2.08-2.65-1.472-4.793-3.448-6.454-5.95-1.66-2.5-2.88-5.401-3.678-8.701-.799-3.3-1.24-6.832-1.324-10.573-.084-3.595.399-6.958 1.429-10.069 1.03-3.11 2.501-5.822 4.414-8.092 1.913-2.27 4.162-4.057 6.768-5.339 2.607-1.282 5.402-1.934 8.43-1.934 5.506 0 9.69 1.198 12.548 3.595 2.858 2.396 4.288 5.423 4.288 9.101zM50.762 53.663c.883 0 2.207-.105 3.972-.337 1.766-.21 3.553-.798 5.402-1.765 1.83-.946 3.427-2.334 4.793-4.12 1.366-1.808 2.039-4.31 2.039-7.546 0-3.237-.505-5.949-1.493-8.156-.987-2.207-2.543-3.3-4.687-3.3-1.765 0-3.258.547-4.456 1.66-1.22 1.094-2.186 2.502-2.922 4.184-.735 1.681-1.282 3.531-1.66 5.549a55.253 55.253 0 00-.778 5.843 64.379 64.379 0 00-.21 5.003v2.984zm49.018-5.066c2.501 1.093 5.044 2.207 7.651 3.3 2.606 1.093 4.939 2.312 6.999 3.636 2.06 1.325 3.741 2.838 5.066 4.52 1.324 1.681 1.976 3.678 1.976 5.948 0 2.859-.631 5.192-1.871 7a13.523 13.523 0 01-4.688 4.246c-1.87 1.03-3.951 1.723-6.221 2.102-2.27.357-4.414.546-6.39.546-1.829 0-3.868-.252-6.117-.778a24.384 24.384 0 01-6.327-2.375c-1.976-1.072-3.636-2.396-4.96-4.015-1.325-1.618-1.976-3.489-1.976-5.612 0-1.471.273-2.774.82-3.91.546-1.134 1.26-2.08 2.144-2.816.882-.736 1.85-1.177 2.921-1.324 1.072-.147 2.144.042 3.258.546 1.093.526 1.871 1.156 2.313 1.934.44.778.651 1.576.651 2.417 0 .841-.21 1.682-.651 2.544a9.818 9.818 0 01-1.766 2.375c-.946.946-1.303 1.955-1.051 2.964.252 1.03.925 1.954 1.976 2.753 1.072.799 2.375 1.493 3.91 2.039a14.33 14.33 0 004.834.82c2.858 0 5.213-.63 7.041-1.871 1.829-1.24 2.964-2.754 3.405-4.52.442-1.765.064-3.636-1.156-5.611-1.219-1.976-3.468-3.7-6.768-5.171a440.107 440.107 0 00-6.053-2.585 39.999 39.999 0 01-6.727-3.637c-2.123-1.43-3.972-3.09-5.507-4.96-1.534-1.871-2.312-4.1-2.312-6.664 0-4.477 1.471-8.071 4.414-10.783 2.943-2.711 7.483-4.077 13.663-4.077 2.858 0 5.381.378 7.546 1.156 2.165.777 3.972 1.723 5.444 2.858 1.471 1.135 2.564 2.397 3.3 3.805.736 1.387 1.093 2.711 1.093 3.973 0 1.765-.231 3.216-.715 4.35-.483 1.136-1.093 2.018-1.871 2.649-.777.63-1.618 1.009-2.543 1.156-.925.147-1.787.042-2.585-.336-1.913-.736-3.048-2.018-3.405-3.847-.358-1.828.399-3.7 2.312-5.612.883-.883 1.408-1.808 1.597-2.753.189-.946-.063-1.85-.714-2.691-.652-.84-1.766-1.534-3.301-2.102-1.534-.547-3.594-.82-6.158-.82-3.384 0-5.865.799-7.441 2.418-1.577 1.618-2.396 3.51-2.48 5.675-.085 2.165.525 4.309 1.807 6.432s3.132 3.7 5.57 4.73l.043-.022zm44.707 0c2.502 1.093 5.045 2.207 7.652 3.3 2.606 1.093 4.939 2.312 6.999 3.636 2.06 1.325 3.741 2.838 5.066 4.52 1.324 1.681 1.976 3.678 1.976 5.948 0 2.859-.631 5.192-1.871 7a13.523 13.523 0 01-4.688 4.246c-1.87 1.03-3.951 1.723-6.221 2.102-2.27.357-4.414.546-6.39.546-1.829 0-3.868-.252-6.117-.778a24.388 24.388 0 01-6.327-2.375c-1.976-1.072-3.636-2.396-4.96-4.015-1.325-1.618-1.976-3.489-1.976-5.612 0-1.471.273-2.774.82-3.91.546-1.134 1.261-2.08 2.144-2.816.882-.736 1.849-1.177 2.921-1.324 1.072-.147 2.144.042 3.258.546 1.093.526 1.871 1.156 2.312 1.934.442.778.652 1.576.652 2.417 0 .841-.21 1.682-.652 2.544a9.796 9.796 0 01-1.765 2.375c-.946.946-1.303 1.955-1.051 2.964.252 1.03.925 1.954 1.976 2.753 1.072.799 2.375 1.493 3.909 2.039 1.535.546 3.153.82 4.835.82 2.858 0 5.213-.63 7.041-1.871 1.829-1.24 2.964-2.754 3.405-4.52.442-1.765.064-3.636-1.156-5.611-1.219-1.976-3.468-3.7-6.768-5.171a442.423 442.423 0 00-6.053-2.585 39.975 39.975 0 01-6.727-3.637c-2.123-1.43-3.972-3.09-5.507-4.96-1.534-1.871-2.312-4.1-2.312-6.664 0-4.477 1.471-8.071 4.414-10.783 2.943-2.711 7.483-4.077 13.663-4.077 2.858 0 5.381.378 7.546 1.156 2.165.777 3.972 1.723 5.444 2.858 1.471 1.135 2.564 2.397 3.3 3.805.736 1.387 1.093 2.711 1.093 3.973 0 1.765-.231 3.216-.715 4.35-.483 1.136-1.093 2.018-1.871 2.649-.777.63-1.618 1.009-2.543 1.156-.925.147-1.787.042-2.585-.336-1.913-.736-3.048-2.018-3.405-3.847-.358-1.828.399-3.7 2.312-5.612.883-.883 1.408-1.808 1.597-2.753.189-.946-.063-1.85-.714-2.691-.652-.84-1.766-1.534-3.301-2.102-1.534-.547-3.594-.82-6.158-.82-3.384 0-5.865.799-7.441 2.418-1.577 1.618-2.396 3.51-2.48 5.675-.084 2.165.525 4.309 1.807 6.432s3.132 3.7 5.57 4.73l.042-.022zm44.919 27.325c.589 0 1.03.169 1.325.505.294.336.441.694.441 1.093 0 .4-.168.778-.505 1.093a1.795 1.795 0 01-1.261.504h-14.987c-.588 0-1.03-.168-1.324-.504-.294-.336-.441-.694-.441-1.093 0-.4.147-.778.441-1.093.294-.315.736-.505 1.324-.505.799 0 1.409-.693 1.808-2.102.399-1.387.61-2.858.61-4.414V38.13c0-.441-.126-.82-.379-1.156a8.582 8.582 0 00-.819-.925 15.342 15.342 0 00-1.22-.882c-.651-.295-1.135-.63-1.429-.988-.21-.358-.273-.736-.168-1.093.105-.358.61-.778 1.492-1.22 2.207-1.03 4.267-1.912 6.222-2.648 1.934-.735 3.174-1.177 3.679-1.324.651-.231 1.156-.378 1.492-.505.336-.126.588-.126.778-.063.189.085.294.295.336.673.042.357.063.988.063 1.87v39.98c.063 1.471.315 2.837.715 4.12.399 1.282 1.009 1.933 1.807 1.933v.021zm-8.155-51.203c-1.619 0-3.006-.568-4.183-1.703-1.177-1.135-1.766-2.543-1.766-4.245 0-1.703.589-3.111 1.766-4.246 1.177-1.136 2.564-1.703 4.183-1.703 1.618 0 3.111.568 4.246 1.703 1.135 1.135 1.702 2.543 1.702 4.245 0 1.703-.567 3.111-1.702 4.247-1.135 1.134-2.544 1.702-4.246 1.702zm53.746 37.099c.589 0 .883.295.883.883 0 1.682-.378 3.531-1.156 5.57a19.273 19.273 0 01-3.363 5.612c-1.472 1.724-3.3 3.153-5.507 4.288-2.207 1.135-4.73 1.703-7.588 1.703-3.679 0-6.853-.652-9.522-1.934a17.37 17.37 0 01-6.6-5.444c-1.724-2.354-2.985-5.234-3.805-8.639-.798-3.405-1.219-7.21-1.219-11.392 0-3.595.568-6.916 1.703-9.964 1.135-3.047 2.669-5.675 4.561-7.882 1.913-2.207 4.12-3.93 6.663-5.17a18.215 18.215 0 018.093-1.871c3.005 0 5.612.399 7.819 1.219 2.207.82 4.036 1.87 5.507 3.195 1.471 1.324 2.564 2.816 3.3 4.519a12.762 12.762 0 011.093 5.17c0 1.977-.441 3.658-1.324 5.003-.883 1.346-2.502 2.04-4.856 2.04-.735 0-1.513-.169-2.375-.505-.841-.337-1.534-.883-2.102-1.66-.546-.778-.841-1.787-.883-3.028-.042-1.24.379-2.816 1.261-4.729.442-.946.736-2.018.883-3.195.147-1.177 0-2.228-.504-3.195-.484-.946-1.345-1.765-2.586-2.417-1.24-.652-3.005-.988-5.275-.988-2.649 0-4.646.799-6.012 2.417-1.366 1.619-2.312 3.637-2.859 6.054-.546 2.417-.84 5.066-.882 7.924a529.929 529.929 0 00-.064 7.925c0 2.206.064 4.666.211 7.377.147 2.712.546 5.297 1.219 7.714.651 2.418 1.66 4.456 2.964 6.117 1.324 1.66 3.152 2.48 5.507 2.48 2.795 0 5.17-.483 7.167-1.429 1.976-.946 3.616-2.144 4.898-3.573 1.282-1.43 2.228-2.985 2.858-4.688.631-1.681.946-3.237.946-4.624 0-.588.295-.883.883-.883h.063zm44.709 14.104c.588 0 1.029.168 1.324.505.294.336.441.693.441 1.093s-.168.777-.504 1.093a1.799 1.799 0 01-1.261.504h-11.12c-.441 0-.841-.147-1.219-.441a1.796 1.796 0 01-.651-1.22v-2.08c-1.388 1.24-3.027 2.312-4.898 3.195-1.871.883-4.351 1.324-7.441 1.324-1.618 0-3.258-.294-4.96-.883a14.418 14.418 0 01-4.562-2.585c-1.366-1.135-2.48-2.565-3.363-4.288-.883-1.724-1.324-3.679-1.324-5.886 0-2.648.61-4.94 1.808-6.873 1.219-1.955 2.816-3.531 4.855-4.793 2.018-1.24 4.309-2.165 6.873-2.753a34.853 34.853 0 017.82-.883 41.5 41.5 0 012.963.105c.883.084 1.619.147 2.207.21v-7.819c0-1.681.001-3.405.064-5.129.042-1.723-.085-3.258-.379-4.624-.294-1.345-.799-2.48-1.534-3.363-.736-.883-1.871-1.324-3.405-1.324a14.77 14.77 0 00-4.562.714c-1.513.484-2.711 1.136-3.636 1.976-.925.841-1.408 1.871-1.492 3.09-.063 1.22.504 2.544 1.765 4.015.946 1.177 1.514 2.354 1.703 3.531.189 1.177.063 2.25-.336 3.195-.4.946-1.072 1.745-1.976 2.375a6.097 6.097 0 01-3.027 1.051c-2.27.147-4.036-.4-5.297-1.66-1.261-1.261-1.871-2.859-1.871-4.856 0-1.471.337-3.09.988-4.834.652-1.766 1.724-3.405 3.195-4.898 1.472-1.513 3.384-2.753 5.781-3.741 2.375-.988 5.296-1.493 8.765-1.493 5.507 0 9.479 1.304 11.939 3.91 2.459 2.606 3.699 6.705 3.699 12.275l.105 24.446c0 .883.042 1.787.105 2.69.063.925.211 1.766.379 2.544.189.778.441 1.387.777 1.87.337.484.757.715 1.262.715zm-21.377 1.093c1.913 0 3.552-.4 4.96-1.219 1.388-.82 2.544-1.703 3.405-2.648V53.452a14.843 14.843 0 00-1.87-.714c-.82-.252-1.913-.379-3.3-.379-3.679 0-6.411 1.262-8.198 3.763-1.808 2.501-2.69 5.906-2.69 10.173 0 3.763.693 6.495 2.102 8.198 1.387 1.703 3.258 2.543 5.612 2.543l-.021-.02zm119.643-49.564c1.471 0 3.279.316 5.444.946 2.165.63 4.246 1.892 6.222 3.805 1.975 1.913 3.678 4.582 5.128 8.03 1.43 3.446 2.144 8.029 2.144 13.767v.21c0 5.654-.714 10.174-2.144 13.537-1.429 3.384-3.132 5.97-5.128 7.756-1.976 1.808-4.057 2.964-6.222 3.531-2.165.547-3.994.82-5.444.82-1.451 0-3.279-.273-5.444-.82-2.165-.546-4.246-1.724-6.222-3.531-1.976-1.808-3.678-4.393-5.129-7.756-1.429-3.384-2.144-7.883-2.144-13.537V54c0-5.717.715-10.32 2.144-13.768 1.43-3.447 3.132-6.137 5.129-8.03 1.976-1.912 4.057-3.173 6.222-3.804 2.165-.63 3.972-.946 5.444-.946zm8.26 26.758c0-3.09-.063-6.138-.168-9.143-.105-3.006-.441-5.718-.988-8.093-.546-2.375-1.366-4.33-2.48-5.843-1.093-1.514-2.648-2.25-4.624-2.25-1.976 0-3.532.757-4.625 2.25-1.093 1.513-1.933 3.447-2.48 5.843-.546 2.396-.883 5.066-.988 8.03-.105 2.963-.168 5.97-.168 8.975v.21c0 3.006.063 5.97.168 8.87.105 2.901.442 5.486.988 7.756.547 2.27 1.366 4.12 2.48 5.508 1.093 1.387 2.649 2.102 4.625 2.102s3.531-.694 4.624-2.102c1.093-1.388 1.934-3.237 2.48-5.508.547-2.27.883-4.855.988-7.756.105-2.9.168-5.864.168-8.87v.021zm59.905 21.587c.589 0 1.03.168 1.325.505.294.336.441.714.441 1.156 0 .441-.168.82-.504 1.156-.337.336-.757.504-1.262.504h-10.909c-.525 0-.924-.168-1.261-.504a2.144 2.144 0 01-.609-1.156v-6.495a37.5 37.5 0 01-1.703 2.375c-.757.988-1.808 1.976-3.09 2.964-1.282.988-2.795 1.828-4.519 2.543-1.724.694-3.699 1.051-5.885 1.051s-3.952-.357-5.234-1.093-2.27-1.66-2.964-2.817c-.694-1.135-1.135-2.396-1.324-3.804a30.227 30.227 0 01-.273-4.078V38.592c0-.442-.106-.84-.337-1.22a5.968 5.968 0 00-.777-.987 6.01 6.01 0 00-.988-.778c-.652-.294-1.135-.63-1.43-.988-.21-.357-.273-.736-.168-1.093.105-.357.61-.778 1.492-1.219 1.094-.504 2.187-1.009 3.259-1.492 1.072-.484 2.059-.925 2.963-1.325.925-.399 1.703-.735 2.375-.987.652-.253 1.093-.42 1.325-.505 1.03-.441 1.639-.483 1.807-.105.19.357.274 1.03.274 1.976v38.213c0 .883.042 1.745.105 2.586.063.84.252 1.618.546 2.312.294.693.778 1.24 1.43 1.66.672.4 1.618.61 2.858.61 1.535 0 2.88-.273 4.015-.82a12.57 12.57 0 002.964-1.976c.84-.778 1.513-1.555 2.039-2.375.504-.799.924-1.513 1.219-2.102V38.571c0-.442-.105-.841-.337-1.22a5.964 5.964 0 00-.777-.987 6.01 6.01 0 00-.988-.778c-.652-.294-1.135-.63-1.43-.988a1.288 1.288 0 01-.168-1.093c.105-.357.61-.778 1.493-1.219a318.299 318.299 0 016.221-2.817c1.934-.84 3.174-1.345 3.679-1.492 1.24-.441 2.06-.547 2.417-.336.357.23.546.946.546 2.207V67.62c.064 1.765.19 3.132.337 4.14.147.988.357 1.913.651 2.754.295.84.673 1.261 1.093 1.261l.063.021zm48.45-46.306c0 .988-.525 1.493-1.534 1.493-.946 0-1.703.168-2.249.504-.547.336-1.009.673-1.367 1.051a4.808 4.808 0 00-.882 1.535l-13.095 43.72a29.07 29.07 0 01-.61 1.324c-.252.505-.799.778-1.598.778-.651 0-1.177-.336-1.534-.988-.21-.294-.357-.652-.441-1.093l-15.849-45.486a1.708 1.708 0 00-.441-.652c-.442-.441-1.03-.651-1.766-.651-1.03 0-1.534-.505-1.534-1.493 0-.925.504-1.387 1.534-1.387h14.545c.946 0 1.43.462 1.43 1.387 0 .988-.484 1.493-1.43 1.493-.588 0-.945.105-1.093.336a3.863 3.863 0 00-.336.652 1.3 1.3 0 00.105.882l11.225 29.848 8.47-28.629c.211-.588.295-1.092.211-1.534-.084-.357-.274-.714-.61-1.05-.336-.337-.967-.505-1.934-.505-1.03 0-1.534-.505-1.534-1.493 0-.925.504-1.387 1.534-1.387h9.249c1.03 0 1.534.462 1.534 1.387v-.042zm37.436 10.447c0 2.88-.525 5.255-1.534 7.168-1.03 1.912-2.354 3.447-3.973 4.582a17.259 17.259 0 01-5.444 2.543c-2.018.547-4.015.946-5.991 1.156-1.975.21-3.846.316-5.612.273a188.294 188.294 0 00-4.288-.063c0 2.144.126 4.436.379 6.895a29.47 29.47 0 001.534 6.894c.778 2.123 1.808 3.91 3.132 5.297 1.324 1.387 3.048 2.102 5.171 2.102 2.858 0 5.234-.42 7.104-1.261 1.871-.84 3.363-1.913 4.456-3.195 1.093-1.282 1.892-2.67 2.376-4.183.483-1.513.714-2.964.714-4.351 0-.504.295-.778.883-.778.505 0 .778.253.778.778 0 2.564-.442 4.856-1.324 6.873-.883 2.018-2.06 3.72-3.532 5.108a14.413 14.413 0 01-5.17 3.132c-1.976.715-4.12 1.072-6.39 1.072-3.826.063-7.042-.63-9.69-2.08-2.649-1.472-4.793-3.448-6.453-5.95-1.661-2.5-2.88-5.401-3.679-8.701-.798-3.3-1.24-6.832-1.324-10.573-.084-3.595.399-6.958 1.429-10.069 1.03-3.11 2.502-5.822 4.414-8.092 1.913-2.27 4.162-4.057 6.769-5.339 2.606-1.282 5.402-1.934 8.429-1.934 5.507 0 9.69 1.198 12.548 3.595 2.859 2.396 4.288 5.423 4.288 9.101zM505.16 53.663c.883 0 2.207-.105 3.973-.337 1.766-.21 3.552-.798 5.402-1.765 1.829-.946 3.426-2.334 4.792-4.12 1.367-1.808 2.039-4.31 2.039-7.546 0-3.237-.504-5.949-1.492-8.156-.988-2.207-2.543-3.3-4.687-3.3-1.766 0-3.258.547-4.457 1.66-1.219 1.094-2.186 2.502-2.921 4.184-.736 1.681-1.282 3.531-1.661 5.549a55.545 55.545 0 00-.778 5.843 64.42 64.42 0 00-.21 5.003v2.984zm48.492 22.238c.589 0 1.03.168 1.324.505.294.336.442.693.442 1.093s-.169.778-.505 1.093c-.336.336-.757.504-1.261.504h-14.987c-.588 0-1.03-.168-1.324-.504-.294-.337-.442-.694-.442-1.093 0-.4.148-.778.442-1.093.294-.337.736-.505 1.324-.505.589 0 1.009-.567 1.261-1.702a33.26 33.26 0 00.61-3.91c.147-1.681.189-3.594.105-5.717V10.825c0-.441-.105-.82-.336-1.156a6.717 6.717 0 00-.778-.946 13.938 13.938 0 00-.988-.883c-.652-.294-1.135-.63-1.429-.988-.211-.357-.274-.735-.168-1.093.105-.357.609-.777 1.492-1.219a60.14 60.14 0 016.117-2.585c1.954-.694 3.216-1.114 3.804-1.261.673-.21 1.177-.4 1.534-.547.358-.147.652-.189.883-.105.232.084.358.294.442.652.084.357.105.988.105 1.87v8.261l.105 55.176v2.922c0 1.135.063 2.228.168 3.258.105 1.03.336 1.913.652 2.648.315.736.777 1.093 1.366 1.093l.042-.02zM352.538 62.995V76.91c0 .652-.105 1.198-.378 1.598-.253.399-.715.61-1.43.61h-36.742c-.588 0-1.03-.169-1.324-.505a1.607 1.607 0 01-.42-1.114c0-.42.126-.757.42-1.114.294-.337.736-.505 1.324-.505.589 0 1.009-.567 1.262-1.702.252-1.135.441-2.439.609-3.889.126-1.681.189-3.615.105-5.717V10.825c0-.42-.105-.82-.336-1.156-.231-.336-.484-.63-.757-.946-.294-.273-.63-.588-.988-.883-.651-.294-1.156-.61-1.45-.988-.21-.357-.273-.714-.168-1.072.105-.378.609-.798 1.492-1.219a60.14 60.14 0 016.117-2.585c1.934-.694 3.216-1.135 3.804-1.261.652-.232 1.177-.4 1.535-.568.357-.126.651-.189.883-.084.231.063.378.294.441.652.063.357.105.988.105 1.87v8.24l.084 55.176v2.922c0 .862-.042 4.73-.021 6.957h2.291c2.081 0 4.33-.189 6.747-.504a25.848 25.848 0 006.727-1.871c2.102-.925 3.825-2.228 5.234-3.93 1.366-1.682 2.08-3.868 2.08-6.6 0-1.03.484-1.535 1.367-1.535.336 0 .651.126.946.42.294.294.42.652.42 1.114l.021.021z"></path>
		//   </g>
		//   <defs>
		//     <clipPath id="a">
		//       <path fill="#fff" d="M0 0h555.418v80H0z"></path>
		//     </clipPath>
		//   </defs>
		// </svg>
		<svg xmlns="http://www.w3.org/2000/svg" width="516" height="262" fill="none">
			<path
				fill="#1E2632"
				d="M25.757 193.013c.625-.215 1.113-.372 1.504-.508.37-.137.664-.176.878-.098.215.078.352.293.41.664.06.371.098.977.098 1.798v7.678l-.098 42.377c0 3.204-.37 5.9-1.073 8.089-.723 2.188-1.719 3.946-3.008 5.275-1.27 1.328-2.831 2.286-4.647 2.872-1.817.586-3.828.86-6.015.86a14.93 14.93 0 01-5.214-.919 15.556 15.556 0 01-4.394-2.461c-1.288-1.016-2.323-2.228-3.065-3.576C.39 253.697 0 252.27 0 250.766c0-1.778.527-3.185 1.582-4.24 1.054-1.055 2.48-1.582 4.237-1.582 1.094 0 1.992.293 2.715.879a4.08 4.08 0 011.425 2.208c.235.879.215 1.797-.058 2.754-.274.958-.86 1.837-1.738 2.658-.82.742-1.27 1.543-1.387 2.403-.117.859.098 1.641.605 2.364.508.723 1.309 1.328 2.402 1.836 1.094.508 2.422.762 3.984.762 1.426 0 2.48-.488 3.125-1.426.644-.938 1.113-2.208 1.386-3.732.273-1.543.39-3.243.351-5.119a268.211 268.211 0 01-.058-5.587v-42.378c0-.41-.098-.781-.313-1.133a4.696 4.696 0 00-.722-.918c-.274-.274-.625-.508-1.016-.723-.546-.273-.956-.586-1.23-.918-.195-.332-.273-.684-.195-1.016.058-.332.547-.723 1.425-1.133a68.074 68.074 0 015.722-2.462c1.836-.684 2.988-1.094 3.456-1.231l.059-.019zm46.359 31.748c0 2.677-.489 4.885-1.426 6.663-.957 1.777-2.187 3.204-3.69 4.259a16.038 16.038 0 01-5.058 2.364c-1.875.508-3.73.879-5.566 1.074-1.835.196-3.573.293-5.214.254-1.64-.039-2.968-.058-3.983-.058 0 1.993.117 4.122.351 6.408a27.42 27.42 0 001.426 6.408c.722 1.974 1.68 3.635 2.91 4.924 1.23 1.289 2.83 1.954 4.803 1.954 2.656 0 4.863-.391 6.6-1.173 1.738-.781 3.125-1.777 4.14-2.969 1.016-1.192 1.758-2.482 2.207-3.888.45-1.407.664-2.755.664-4.045 0-.468.273-.722.82-.722.469 0 .723.234.723.722 0 2.384-.41 4.514-1.23 6.389-.82 1.876-1.914 3.458-3.281 4.748a13.4 13.4 0 01-4.804 2.911c-1.836.664-3.828.996-5.937.996-3.553.059-6.541-.586-9.002-1.934a16.961 16.961 0 01-5.995-5.529c-1.542-2.325-2.675-5.021-3.417-8.089-.742-3.067-1.152-6.349-1.23-9.827-.078-3.341.37-6.467 1.328-9.358.956-2.892 2.323-5.412 4.1-7.522 1.777-2.111 3.867-3.771 6.288-4.963 2.422-1.192 5.019-1.798 7.83-1.798 5.117 0 9.003 1.114 11.659 3.341 2.656 2.228 3.984 5.041 3.984 8.46zm-24.957 12.778c.82 0 2.05-.098 3.69-.313 1.641-.195 3.301-.742 5.02-1.641 1.698-.879 3.182-2.169 4.452-3.829 1.27-1.681 1.894-4.006 1.894-7.014 0-3.009-.469-5.529-1.386-7.581-.918-2.051-2.363-3.067-4.355-3.067-1.64 0-3.027.508-4.14 1.543-1.133 1.016-2.03 2.325-2.714 3.888-.684 1.563-1.191 3.282-1.543 5.158a51.38 51.38 0 00-.723 5.432 59.866 59.866 0 00-.195 4.65v2.774zm45.539-4.709c2.324 1.016 4.687 2.052 7.108 3.068 2.421 1.016 4.589 2.149 6.503 3.38 1.913 1.231 3.476 2.637 4.706 4.2 1.23 1.563 1.835 3.419 1.835 5.529 0 2.658-.585 4.826-1.738 6.506a12.553 12.553 0 01-4.354 3.947c-1.738.957-3.671 1.602-5.78 1.954-2.11.332-4.101.508-5.937.508-1.699 0-3.593-.235-5.682-.723a22.628 22.628 0 01-5.878-2.208c-1.836-.996-3.378-2.227-4.609-3.732-1.23-1.504-1.835-3.243-1.835-5.216 0-1.368.253-2.579.761-3.634.508-1.055 1.172-1.934 1.992-2.618.82-.684 1.718-1.094 2.714-1.231s1.992.039 3.027.508c1.016.488 1.738 1.075 2.148 1.797a4.47 4.47 0 01.606 2.247c0 .782-.196 1.563-.606 2.364a9.122 9.122 0 01-1.64 2.208c-.879.879-1.21 1.817-.977 2.755.235.957.86 1.817 1.836 2.559.996.743 2.207 1.388 3.632 1.895 1.426.508 2.93.762 4.492.762 2.655 0 4.843-.586 6.541-1.738 1.699-1.153 2.754-2.56 3.164-4.201.41-1.641.058-3.38-1.074-5.217-1.133-1.836-3.222-3.438-6.288-4.806a408.59 408.59 0 00-5.624-2.403 37.109 37.109 0 01-6.249-3.38c-1.972-1.329-3.69-2.872-5.116-4.611-1.426-1.739-2.148-3.81-2.148-6.193 0-4.162 1.367-7.503 4.1-10.023 2.734-2.52 6.953-3.79 12.694-3.79 2.655 0 4.999.351 7.01 1.074 2.011.723 3.691 1.602 5.058 2.657s2.382 2.228 3.066 3.537c.683 1.289 1.015 2.52 1.015 3.692 0 1.641-.215 2.989-.664 4.045-.449 1.055-1.015 1.875-1.738 2.461-.722.586-1.503.938-2.363 1.075-.859.137-1.66.039-2.402-.313-1.777-.684-2.831-1.875-3.163-3.575-.332-1.7.371-3.439 2.148-5.217.82-.82 1.308-1.68 1.484-2.559.176-.879-.059-1.719-.664-2.501-.605-.781-1.64-1.426-3.066-1.954-1.425-.508-3.339-.762-5.721-.762-3.144 0-5.449.743-6.913 2.247-1.465 1.505-2.226 3.263-2.304 5.275-.079 2.013.488 4.006 1.679 5.979 1.191 1.973 2.91 3.438 5.175 4.396l.039-.02zm41.535 0c2.324 1.016 4.687 2.052 7.109 3.068 2.421 1.016 4.589 2.149 6.502 3.38 1.914 1.231 3.476 2.637 4.706 4.2 1.231 1.563 1.836 3.419 1.836 5.529 0 2.658-.586 4.826-1.738 6.506a12.556 12.556 0 01-4.355 3.947c-1.738.957-3.671 1.602-5.78 1.954-2.109.332-4.101.508-5.936.508-1.699 0-3.593-.235-5.683-.723a22.641 22.641 0 01-5.878-2.208c-1.835-.996-3.378-2.227-4.608-3.732-1.23-1.504-1.836-3.243-1.836-5.216 0-1.368.254-2.579.762-3.634.508-1.055 1.172-1.934 1.992-2.618.82-.684 1.718-1.094 2.714-1.231s1.992.039 3.027.508c1.015.488 1.738 1.075 2.148 1.797.41.723.605 1.466.605 2.247 0 .782-.195 1.563-.605 2.364a9.131 9.131 0 01-1.64 2.208c-.879.879-1.211 1.817-.977 2.755.234.957.859 1.817 1.836 2.559.996.743 2.206 1.388 3.632 1.895 1.425.508 2.929.762 4.491.762 2.656 0 4.843-.586 6.542-1.738 1.699-1.153 2.753-2.56 3.164-4.201.41-1.641.058-3.38-1.074-5.217-1.133-1.836-3.223-3.438-6.288-4.806a412.878 412.878 0 00-5.624-2.403 37.121 37.121 0 01-6.249-3.38c-1.973-1.329-3.691-2.872-5.116-4.611-1.426-1.739-2.149-3.81-2.149-6.193 0-4.162 1.367-7.503 4.101-10.023 2.734-2.52 6.952-3.79 12.693-3.79 2.656 0 4.999.351 7.011 1.074 2.011.723 3.69 1.602 5.057 2.657 1.367 1.055 2.383 2.228 3.066 3.537.684 1.289 1.016 2.52 1.016 3.692 0 1.641-.215 2.989-.664 4.045-.449 1.055-1.016 1.875-1.738 2.461-.723.586-1.504.938-2.363 1.075s-1.66.039-2.402-.313c-1.777-.684-2.831-1.875-3.163-3.575-.332-1.7.371-3.439 2.148-5.217.82-.82 1.308-1.68 1.484-2.559.175-.879-.059-1.719-.664-2.501-.606-.781-1.641-1.426-3.066-1.954-1.426-.508-3.339-.762-5.722-.762-3.144 0-5.448.743-6.913 2.247-1.464 1.505-2.226 3.263-2.304 5.275-.078 2.013.488 4.006 1.68 5.979 1.191 1.973 2.909 3.438 5.174 4.396l.039-.02zm41.731 25.38c.547 0 .957.156 1.23.469.274.312.41.644.41 1.016 0 .371-.156.722-.468 1.016a1.67 1.67 0 01-1.172.468h-13.923c-.547 0-.957-.156-1.231-.468-.273-.313-.41-.645-.41-1.016 0-.372.137-.723.41-1.016.274-.293.684-.469 1.231-.469.742 0 1.308-.645 1.679-1.954.371-1.29.566-2.657.566-4.103v-29.072c0-.41-.117-.762-.351-1.075a7.886 7.886 0 00-.762-.859 14.226 14.226 0 00-1.132-.821c-.606-.273-1.055-.586-1.328-.918-.195-.332-.254-.684-.156-1.016.097-.332.566-.723 1.386-1.133a81.94 81.94 0 015.78-2.462c1.797-.684 2.949-1.094 3.418-1.231.605-.215 1.074-.352 1.386-.469.313-.117.547-.117.723-.058.175.078.273.273.312.625.039.332.059.918.059 1.739v37.16c.058 1.368.293 2.638.664 3.83.371 1.191.937 1.797 1.679 1.797v.02zm-7.577-47.594c-1.503 0-2.792-.528-3.886-1.583-1.093-1.055-1.64-2.364-1.64-3.946 0-1.583.547-2.892 1.64-3.947 1.094-1.055 2.383-1.582 3.886-1.582 1.504 0 2.89.527 3.945 1.582 1.054 1.055 1.582 2.364 1.582 3.947 0 1.582-.528 2.891-1.582 3.946-1.055 1.055-2.363 1.583-3.945 1.583zM218.32 245.1c.547 0 .82.273.82.821 0 1.563-.352 3.282-1.074 5.177a17.922 17.922 0 01-3.125 5.217c-1.366 1.602-3.065 2.93-5.116 3.985-2.05 1.055-4.394 1.583-7.049 1.583-3.418 0-6.366-.606-8.846-1.798a16.13 16.13 0 01-6.132-5.06c-1.601-2.188-2.773-4.865-3.535-8.03-.761-3.165-1.132-6.701-1.132-10.589 0-3.341.527-6.428 1.582-9.261 1.054-2.833 2.48-5.275 4.237-7.327 1.777-2.051 3.828-3.653 6.19-4.806a16.915 16.915 0 017.519-1.739c2.792 0 5.213.371 7.264 1.133 2.05.743 3.749 1.739 5.116 2.97 1.367 1.231 2.383 2.618 3.066 4.201a11.879 11.879 0 011.015 4.806c0 1.836-.41 3.399-1.23 4.65-.82 1.27-2.324 1.895-4.511 1.895-.683 0-1.406-.156-2.206-.469-.781-.313-1.426-.821-1.953-1.543-.508-.723-.781-1.661-.82-2.814-.039-1.153.351-2.618 1.171-4.396.41-.879.684-1.875.821-2.97.136-1.094 0-2.071-.469-2.969-.449-.879-1.25-1.641-2.402-2.247-1.152-.606-2.792-.918-4.901-.918-2.461 0-4.316.742-5.585 2.246-1.27 1.505-2.148 3.38-2.656 5.627s-.781 4.709-.82 7.366a505.555 505.555 0 00-.059 7.366c0 2.051.059 4.337.195 6.857.137 2.521.508 4.924 1.133 7.171.605 2.247 1.543 4.142 2.753 5.685 1.231 1.544 2.93 2.306 5.117 2.306 2.597 0 4.803-.45 6.659-1.329 1.835-.879 3.358-1.993 4.55-3.321 1.191-1.329 2.069-2.775 2.655-4.357.586-1.563.879-3.009.879-4.298 0-.548.273-.821.82-.821h.059zm41.535 13.11c.547 0 .957.156 1.23.469.274.312.41.644.41 1.016 0 .371-.156.722-.468 1.016a1.67 1.67 0 01-1.172.468h-10.33c-.41 0-.781-.136-1.133-.41a1.67 1.67 0 01-.605-1.133v-1.934c-1.289 1.152-2.812 2.149-4.55 2.969-1.738.821-4.042 1.231-6.913 1.231-1.503 0-3.027-.273-4.608-.82a13.39 13.39 0 01-4.238-2.403c-1.269-1.055-2.304-2.384-3.124-3.986-.82-1.602-1.23-3.419-1.23-5.471 0-2.461.566-4.591 1.679-6.388 1.133-1.817 2.617-3.283 4.511-4.455 1.874-1.153 4.003-2.012 6.385-2.559a32.307 32.307 0 017.265-.821c1.015 0 1.933.039 2.753.098.82.078 1.504.136 2.05.195v-7.268c0-1.563 0-3.165.059-4.767.039-1.602-.078-3.029-.351-4.298-.274-1.251-.742-2.306-1.426-3.126-.683-.821-1.738-1.231-3.163-1.231-1.426 0-2.851.215-4.238.664-1.406.449-2.519 1.055-3.378 1.836-.859.782-1.309 1.739-1.387 2.872-.058 1.134.469 2.365 1.641 3.732.878 1.094 1.406 2.188 1.581 3.283.176 1.094.059 2.09-.312 2.969s-.996 1.622-1.836 2.208a5.658 5.658 0 01-2.812.977c-2.109.137-3.749-.371-4.921-1.544-1.171-1.172-1.738-2.657-1.738-4.513 0-1.367.313-2.872.918-4.493.606-1.642 1.601-3.166 2.968-4.553 1.367-1.406 3.144-2.559 5.371-3.477 2.206-.919 4.92-1.388 8.143-1.388 5.116 0 8.807 1.212 11.091 3.634 2.285 2.423 3.437 6.233 3.437 11.41l.098 22.723c0 .82.039 1.66.097 2.5.059.86.196 1.642.352 2.365.176.722.41 1.289.722 1.738.313.45.703.665 1.172.665zm-19.86 1.016c1.777 0 3.301-.372 4.609-1.134 1.289-.762 2.363-1.582 3.163-2.461v-18.307c-.41-.195-.995-.43-1.737-.664-.762-.235-1.777-.352-3.066-.352-3.418 0-5.956 1.172-7.616 3.497-1.68 2.325-2.5 5.49-2.5 9.456 0 3.498.645 6.038 1.953 7.62 1.289 1.583 3.027 2.364 5.214 2.364l-.02-.019zm111.152-46.07c1.367 0 3.047.293 5.058.879 2.011.586 3.944 1.758 5.78 3.536 1.836 1.778 3.417 4.26 4.765 7.464 1.328 3.204 1.992 7.463 1.992 12.797v.195c0 5.256-.664 9.457-1.992 12.583-1.328 3.145-2.91 5.548-4.765 7.209-1.836 1.68-3.769 2.755-5.78 3.282-2.011.508-3.71.762-5.058.762-1.347 0-3.046-.254-5.057-.762-2.012-.508-3.945-1.602-5.781-3.282-1.835-1.68-3.417-4.083-4.764-7.209-1.328-3.146-1.992-7.327-1.992-12.583v-.195c0-5.314.664-9.593 1.992-12.797 1.327-3.204 2.909-5.705 4.764-7.464 1.836-1.778 3.769-2.95 5.781-3.536 2.011-.586 3.69-.879 5.057-.879zm7.675 24.891c0-2.872-.059-5.705-.157-8.499-.097-2.794-.41-5.314-.917-7.522-.508-2.208-1.27-4.025-2.305-5.432-1.015-1.406-2.46-2.09-4.296-2.09-1.835 0-3.28.703-4.296 2.09-1.015 1.407-1.796 3.205-2.304 5.432-.508 2.227-.82 4.709-.918 7.463a235.144 235.144 0 00-.156 8.343v.195c0 2.794.058 5.549.156 8.245.098 2.696.41 5.1.918 7.21.508 2.11 1.269 3.829 2.304 5.118 1.016 1.29 2.461 1.954 4.296 1.954 1.836 0 3.281-.645 4.296-1.954 1.016-1.289 1.797-3.008 2.305-5.118.507-2.11.82-4.514.917-7.21.098-2.696.157-5.451.157-8.245v.02zm55.653 20.045c.547 0 .957.157 1.231.469.273.313.41.665.41 1.075 0 .41-.156.762-.469 1.075-.312.312-.703.468-1.172.468h-10.134c-.489 0-.86-.156-1.172-.468a1.99 1.99 0 01-.566-1.075v-6.037a35.13 35.13 0 01-1.582 2.208c-.703.918-1.68 1.836-2.871 2.754-1.191.919-2.597 1.7-4.198 2.364-1.601.645-3.437.977-5.468.977s-3.671-.332-4.862-1.016c-1.192-.683-2.109-1.543-2.754-2.618-.644-1.055-1.054-2.227-1.23-3.536a28.034 28.034 0 01-.254-3.79v-27.431c0-.41-.098-.782-.312-1.133a5.516 5.516 0 00-.723-.919 5.561 5.561 0 00-.918-.723c-.605-.273-1.054-.586-1.328-.918-.195-.332-.253-.684-.156-1.016.098-.332.567-.723 1.387-1.133a359.913 359.913 0 015.78-2.618c.859-.371 1.582-.684 2.207-.918a70.272 70.272 0 011.23-.469c.957-.41 1.523-.45 1.679-.098.176.332.254.957.254 1.837v35.519c0 .821.039 1.622.098 2.403.058.782.234 1.505.507 2.149.274.645.723 1.153 1.328 1.544.625.371 1.504.566 2.656.566 1.426 0 2.675-.254 3.73-.761a11.688 11.688 0 002.753-1.837c.781-.723 1.406-1.446 1.894-2.208.469-.742.86-1.406 1.133-1.954v-27.333c0-.41-.098-.781-.312-1.133a5.561 5.561 0 00-.723-.918 5.509 5.509 0 00-.918-.723c-.605-.274-1.054-.586-1.328-.918a1.202 1.202 0 01-.156-1.016c.098-.332.566-.723 1.387-1.133 2.05-.958 3.964-1.818 5.78-2.619 1.796-.781 2.949-1.25 3.417-1.387 1.152-.41 1.914-.508 2.246-.312.332.215.508.879.508 2.051v35.109c.058 1.641.175 2.911.312 3.849.137.918.332 1.778.605 2.56.274.781.625 1.172 1.016 1.172l.058.019zm45.012-43.021c0 .918-.488 1.387-1.426 1.387-.878 0-1.581.156-2.089.469-.508.312-.937.625-1.269.976-.352.411-.625.88-.821 1.427l-12.165 40.638c-.137.332-.332.743-.567 1.231-.234.469-.742.723-1.484.723-.605 0-1.093-.313-1.425-.918-.196-.274-.332-.606-.41-1.016l-14.724-42.28a1.592 1.592 0 00-.41-.606c-.41-.41-.957-.605-1.641-.605-.956 0-1.425-.469-1.425-1.387 0-.86.469-1.29 1.425-1.29h13.514c.878 0 1.327.43 1.327 1.29 0 .918-.449 1.387-1.327 1.387-.547 0-.879.097-1.016.312a3.576 3.576 0 00-.312.606c-.059.274-.039.547.097.821l10.428 27.743 7.87-26.61c.195-.547.273-1.016.195-1.426a2.027 2.027 0 00-.566-.977c-.313-.313-.899-.469-1.797-.469-.957 0-1.425-.469-1.425-1.387 0-.86.468-1.29 1.425-1.29h8.592c.957 0 1.426.43 1.426 1.29v-.039zm34.778 9.69c0 2.677-.488 4.885-1.425 6.663-.957 1.777-2.187 3.204-3.691 4.259a16.035 16.035 0 01-5.057 2.364c-1.875.508-3.73.879-5.566 1.074-1.835.196-3.573.293-5.214.254-1.64-.039-2.968-.058-3.983-.058 0 1.993.117 4.122.351 6.408a27.405 27.405 0 001.426 6.408c.722 1.974 1.679 3.635 2.909 4.924 1.231 1.289 2.832 1.954 4.804 1.954 2.656 0 4.862-.391 6.6-1.173 1.738-.781 3.125-1.777 4.14-2.969 1.016-1.192 1.758-2.482 2.207-3.888.449-1.407.664-2.755.664-4.045 0-.468.273-.722.82-.722.469 0 .723.234.723.722 0 2.384-.411 4.514-1.231 6.389-.82 1.876-1.913 3.458-3.28 4.748a13.405 13.405 0 01-4.804 2.911c-1.836.664-3.828.996-5.937.996-3.554.059-6.541-.586-9.002-1.934a16.969 16.969 0 01-5.995-5.529c-1.543-2.325-2.675-5.021-3.417-8.089-.742-3.067-1.152-6.349-1.23-9.827-.079-3.341.371-6.467 1.327-9.358.957-2.892 2.324-5.412 4.101-7.522 1.777-2.111 3.867-3.771 6.288-4.963 2.422-1.192 5.019-1.798 7.831-1.798 5.116 0 9.002 1.114 11.658 3.341 2.656 2.228 3.983 5.041 3.983 8.46zm-24.956 12.758c.82 0 2.05-.097 3.691-.312 1.64-.196 3.3-.743 5.018-1.641 1.699-.88 3.183-2.169 4.453-3.83 1.269-1.68 1.894-4.005 1.894-7.014 0-3.009-.469-5.529-1.387-7.58-.917-2.052-2.362-3.068-4.354-3.068-1.641 0-3.027.508-4.14 1.544-1.133 1.016-2.031 2.325-2.714 3.888-.684 1.563-1.192 3.282-1.543 5.158a51.28 51.28 0 00-.723 5.431 60.197 60.197 0 00-.195 4.65v2.774zm45.05 20.691c.547 0 .957.156 1.231.469.273.312.41.644.41 1.016 0 .371-.156.722-.469 1.016-.312.312-.703.468-1.172.468h-13.923c-.547 0-.957-.156-1.23-.468-.273-.313-.41-.645-.41-1.016 0-.372.137-.723.41-1.016.273-.313.683-.469 1.23-.469.547 0 .938-.528 1.172-1.583a31.01 31.01 0 00.566-3.634c.137-1.563.176-3.341.098-5.314v-49.958c0-.41-.098-.762-.313-1.074a6.152 6.152 0 00-.722-.88 13.07 13.07 0 00-.918-.82c-.605-.274-1.054-.586-1.328-.919-.195-.332-.254-.683-.156-1.015.098-.333.566-.723 1.386-1.134a56.08 56.08 0 015.683-2.403c1.816-.645 2.988-1.035 3.535-1.172a17.204 17.204 0 001.425-.508c.332-.137.605-.176.82-.098.215.078.332.274.41.606.078.332.098.918.098 1.739v7.678l.098 51.286v2.716c0 1.055.058 2.071.156 3.029.097.957.312 1.777.605 2.461.293.684.723 1.016 1.269 1.016l.039-.019zm-186.84-12.016v12.934c0 .606-.098 1.114-.352 1.485-.234.371-.664.566-1.328.566h-34.134c-.547 0-.957-.156-1.23-.468a1.493 1.493 0 01-.391-1.036c0-.391.117-.703.391-1.035.273-.313.683-.469 1.23-.469.547 0 .937-.528 1.171-1.583.235-1.055.411-2.266.567-3.614.117-1.563.176-3.361.097-5.315v-49.957c0-.391-.097-.762-.312-1.075a9.84 9.84 0 00-.703-.879c-.273-.254-.586-.547-.918-.821-.605-.273-1.074-.566-1.347-.918-.196-.332-.254-.664-.156-.996.097-.352.566-.743 1.386-1.134a55.89 55.89 0 015.683-2.403c1.796-.645 2.987-1.055 3.534-1.172.605-.215 1.094-.371 1.426-.528.332-.117.605-.175.82-.078.215.059.351.274.41.606.058.332.097.918.097 1.739v7.659l.079 51.286v2.716c0 .801-.039 4.396-.02 6.467h2.129c1.933 0 4.022-.176 6.268-.469a24.026 24.026 0 006.249-1.739c1.953-.86 3.554-2.071 4.862-3.654 1.27-1.563 1.933-3.595 1.933-6.135 0-.957.45-1.426 1.27-1.426.312 0 .605.117.879.391.273.274.39.606.39 1.035l.02.02zM258 0c-27.339 0-49.503 22.175-49.503 49.528v53.494c0 19.323 11.053 36.047 27.183 44.194 2.402-3.692 4.647-7.463 6.405-11.488 1.913-4.415-.352-8.909-3.047-12.387-2.929-3.79-4.179-7.795-4.198-12.367-.02-4.728-.332-9.476.683-14.145.43-1.954.703-4.67 3.554-4.299 2.598.313 2.754 2.618 2.832 4.904.156 4.338.683 8.48 3.808 12.075 2.773 3.184 3.613 7.209 2.382 11.703 3.203-5.608 5.839-11.352 7.499-17.506.43-1.622.566-3.341.683-5.04.235-3.459-1.288-5.686-4.901-5.725-2.363 0-3.73-1.094-4.531-3.068-2.772-6.799-3.417-13.5 1.016-19.948.722-1.055 1.113-2.657 2.792-2.266 1.816.41 1.856 1.934 1.758 3.478-.195 3.321-.137 6.564 3.241 9.905.43-5.783-.058-10.687-1.23-15.532-.097-.43-.683-.958-1.113-1.036-4.862-1.016-6.717-4.884-8.768-8.792-1.25-2.383-2.909-4.65-5.331-6.213-.722-.469-1.23-1.348-1.718-2.11-2.129-3.243-1.914-6.213.546-8.108 2.676-2.07 6.347-1.504 8.573 1.66 2.187 3.107 4.062 6.429 6.054 9.672.39.645.527 1.622 1.542 1.504 1.231-.136 1.192-1.25 1.328-2.13.43-2.676-.254-5.216-1.093-7.736-3.203-9.495 1.191-17.252 5.975-24.715 1.562-2.443 3.242-.665 3.73 1.445 1.504 6.682.82 13.286-1.015 19.812-.313 1.133-.528 2.54-1.309 3.243-5.507 4.943-3.554 11.664-4.433 17.72-.136.938-.136 2.11.821 2.423 1.132.371 1.406-.898 1.874-1.64.547-.9 1.016-1.877 2.07-2.306 4.921-2.032 8.436-5.569 11.092-10.101.762-1.31 1.855-2.364 3.534-1.798 1.66.567 1.797 2.227 1.934 3.615.195 1.895-.293 3.75-1.875 4.962-5.448 4.181-9.744 10.12-17.087 11.469-1.952.352-2.109 1.778-2.011 3.263a981.55 981.55 0 001.328 16.822c.097.996.918 2.676 1.777 1.152 2.558-4.552 6.913-6.252 11.248-8.01 3.456-1.407 4.921-4.572 7.01-7.21 1.328-1.68 2.715-3.555 5.214-2.207 2.675 1.465 1.816 3.966.918 5.88-1.836 3.908-3.964 7.542-7.733 10.219-5.624 4.005-10.233 9.495-17.302 11.312-1.171.313-1.523 1.387-1.659 2.462-.938 8.088-4.55 15.317-7.343 22.8-.293.782-1.367 1.661-.254 2.403.977.645 1.66-.41 2.305-1.016.859-.801 2.148-1.621 2.323-2.598 1.621-8.519 10.057-10.609 14.939-16.021 1.328-1.465 3.535-1.583 4.96.059 1.933 2.227 1.484 4.825-.273 6.857-1.973 2.267-4.179 4.455-6.659 6.135-2.812 1.915-4.453 4.474-5.468 7.483-1.679 5.002-5.116 7.717-10.252 7.581-4.901-.117-7.557 1.895-9.959 6.252l-5.487 8.108a49.174 49.174 0 0020.543 4.474c27.338 0 49.502-22.175 49.502-49.528V49.528C307.424 22.175 285.26 0 257.922 0H258z"></path>

			<defs>
				<path fill="#fff" d="M0 0h516v262H0z"></path>
			</defs>
		</svg>
	);
}

export default LogoDesktop;
