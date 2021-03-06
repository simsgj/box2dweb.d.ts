/**
* Box2DWeb-2.1.d.ts Copyright (c) 2012 Josh Baldwin http://github.com/jbaldwin/box2dweb.d.ts
* There are a few competing javascript Box2D ports.
* This definitions file is for Box2dWeb.js ->
*   http://code.google.com/p/box2dweb/
*
* Box2D C++ Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
*    claim that you wrote the original software. If you use this software
*    in a product, an acknowledgment in the product documentation would be
*    appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
*    misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
**/

/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* A mouse joint is used to make a point on a body track a specified world point. This a soft constraint with a maximum force. This allows the constraint to stretch and without applying huge forces. Note: this joint is not fully documented as it is intended primarily for the testbed. See that for more instructions.
	**/
	export class b2MouseJoint extends b2Joint {

		/**
		* Get the anchor point on bodyA in world coordinates.
		* @return Body A anchor.
		**/
		public GetAnchorA(): b2Math.b2Vec2;

		/**
		* Get the anchor point on bodyB in world coordinates.
		* @return Body B anchor.
		**/
		public GetAnchorB(): b2Math.b2Vec2;

		/**
		* Gets the damping ratio.
		* @return Damping ratio.
		**/
		public GetDampingRatio(): number;

		/**
		* Gets the frequency.
		* @return Frequency.
		**/
		public GetFrequency(): number;

		/**
		* Gets the max force.
		* @return Max force.
		**/
		public GetMaxForce(): number;

		/**
		* Get the reaction force on body2 at the joint anchor in N.
		* @param inv_dt
		* @return Reaction force in N.
		**/
		public GetReactionForce(inv_dt: number): b2Math.b2Vec2;

		/**
		* Get the reaction torque on body 2 in N.
		* @param inv_dt
		* @return Reaction torque in N.
		**/
		public GetReactionTorque(inv_dt: number): number;

		/**
		* Gets the target.
		* @return Target.
		**/
		public GetTarget(): b2Math.b2Vec2;

		/**
		* Sets the damping ratio.
		* @param ratio New damping ratio.
		**/
		public SetDampingRatio(ratio: number): void;

		/**
		* Sets the frequency.
		* @param hz New frequency (hertz).
		**/
		public SetFrequency(hz: number): void;

		/**
		* Sets the max force.
		* @param maxForce New max force.
		**/
		public SetMaxForce(maxForce: number): void;

		/**
		* Use this to update the target point.
		* @param target New target.
		**/
		public SetTarget(target: b2Math.b2Vec2): void;
	}
}
