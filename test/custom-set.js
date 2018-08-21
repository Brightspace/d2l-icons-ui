import '../../@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="d2l-test" size="30">
	<svg>
		<defs>
			<g id="github">
				<path d="M128 0C57.318 0 0 57.307 0 128c0 56.555 36.676 104.536 87.535 121.46 6.397 1.186 8.746-2.776 8.746-6.157 0-3.052-.11-13.135-.17-23.83-35.61 7.742-43.12-15.103-43.12-15.103-5.82-14.795-14.21-18.73-14.21-18.73-11.61-7.944.88-7.78.88-7.78 12.86.902 19.62 13.19 19.62 13.19 11.42 19.568 29.95 13.91 37.25 10.64 1.15-8.272 4.47-13.92 8.13-17.116-28.43-3.236-58.32-14.212-58.32-63.258 0-13.975 5-25.394 13.19-34.358-1.33-3.224-5.71-16.242 1.24-33.874 0 0 10.75-3.44 35.21 13.12 10.21-2.835 21.16-4.257 32.04-4.306 10.88.05 21.84 1.47 32.07 4.307 24.43-16.56 35.17-13.12 35.17-13.12 6.966 17.63 2.583 30.65 1.254 33.873 8.205 8.964 13.17 20.383 13.17 34.358 0 49.163-29.945 59.988-58.45 63.157 4.59 3.972 8.68 11.762 8.68 23.704 0 17.126-.145 30.91-.145 35.126 0 3.407 2.3 7.398 8.79 6.14C219.37 232.5 256 184.537 256 128.003 256 57.307 198.69 0 128 0zM47.94 182.34c-.28.636-1.282.827-2.193.39-.93-.417-1.45-1.284-1.15-1.922.276-.655 1.28-.838 2.205-.4.93.42 1.46 1.294 1.14 1.932zm6.297 5.618c-.61.566-1.804.303-2.614-.59-.837-.893-.994-2.087-.375-2.66.63-.567 1.787-.302 2.626.59.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.86 1.075.783 1.157.783 2.522-.018 3.08zm7.304 8.325c-.7.78-2.19.57-3.28-.48-1.12-1.03-1.43-2.49-.72-3.27.71-.77 2.22-.56 3.32.49 1.11 1.03 1.45 2.51.7 3.27zm9.45 2.82c-.31 1-1.75 1.46-3.2 1.03-1.44-.44-2.39-1.61-2.1-2.62.3-1.01 1.75-1.48 3.21-1.03 1.45.44 2.4 1.61 2.1 2.63zm10.75 1.19c.04 1.06-1.19 1.93-2.71 1.95-1.53.04-2.77-.82-2.78-1.86 0-1.06 1.2-1.93 2.734-1.96 1.52-.03 2.77.82 2.77 1.87zm10.56-.4c.18 1.03-.87 2.09-2.38 2.37-1.484.27-2.86-.36-3.05-1.38-.183-1.05.894-2.11 2.377-2.38 1.513-.262 2.87.357 3.06 1.404z"></path>
			</g>
		</defs>
	</svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
