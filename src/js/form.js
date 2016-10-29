

	import $ from "jquery";


	function renderRes(item){
	return `

	<form>

		<p class="formTitle">Full Name<p>
		<p><input type="text" name="Full Name"></p>

		<p class="formTitle">Number Of Guests</p>
		<p><input type="number"  name="Number of Guests"></p>

		<p class="formTitle">Date</p>
		<p><input type="date" name="Date"></p>

		<p class="formTitle">Special Notes</p>
		<p><textarea class></textarea></p>


	</form>

		<p class="formTitle">Seating Preference</p>

			<select> name = "Seating Preference
				<option value = "Indoor">Indoor</option>
				<option value = "Outdoor">Outdoor</option>
			</select>

		<div><button>Make Reservation</button></div>`
};


export{renderRes};
